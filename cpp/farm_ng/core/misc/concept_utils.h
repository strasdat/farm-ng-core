//    Copyright 2022, farm-ng inc.
//
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
//
//        http://www.apache.org/licenses/LICENSE-2.0
//
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.

#pragma once

#include <initializer_list>

namespace farm_ng {

template <class Derived, class Base>
concept DerivedFrom = std::is_base_of_v<Base, Derived>;

template <class T, class U>
concept SameAs = std::is_same_v<T, U>;

template <class T>
concept EnumType = std::is_enum_v<T>;

template <typename T>
concept Arithmetic = std::is_arithmetic_v<T>;

}  // namespace farm_ng
