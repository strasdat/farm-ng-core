// Copyright (c) farm-ng, inc.
//
// Use of this source code is governed by an MIT-style
// license that can be found in the LICENSE file or at
// https://opensource.org/licenses/MIT.

// Copyright (c) farm-ng, inc. All rights reserved.

#include "farm_ng/core/prototools/event_log_writer.h"

#include "farm_ng/core/prototools/event_log_reader.h"

#include <farm_ng/core/logging/logger.h>
#include <farm_ng/core/misc/filesystem.h>
#include <gtest/gtest.h>

#ifndef __USE_POSIX
#define __USE_POSIX
#endif
#include <unistd.h>

using namespace farm_ng;
namespace {
std::string getHostName() {
  char hostname[_POSIX_HOST_NAME_MAX];
  gethostname(hostname, _POSIX_HOST_NAME_MAX);
  return std::string(hostname);
}
}  // namespace

TEST(event_log, roundtrip) {
  auto maybe_log_dir = createUniqueTemporaryDirectory();
  auto log_dir = FARM_UNWRAP(maybe_log_dir);
  auto file = log_dir / "events.log";
  {
    EventLogWriter writer(file);
    core::proto::Timestamp x;
    for (int i = 0; i < 10; ++i) {
      x.set_stamp(i);
      writer.write("my_stamps", x);
    }
  }
  {
    EventLogReader reader(file);
    for (int i = 0; i < 10; ++i) {
      std::string payload;
      auto [event, pos] = reader.readNextEvent(&payload);
      core::proto::Timestamp x;
      EXPECT_EQ(true, x.ParseFromString(payload));
      EXPECT_EQ(i, x.stamp());
      EXPECT_EQ("protobuf", event.uri().scheme());
      EXPECT_EQ("my_stamps", event.uri().path());
      EXPECT_EQ(getHostName(), event.uri().authority());
      EXPECT_EQ("type=farm_ng.core.proto.Timestamp", event.uri().query());
    }
    EXPECT_THROW(reader.readNextEvent(), std::runtime_error);
  }
}