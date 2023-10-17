"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,u=m["".concat(p,".").concat(f)]||m[f]||d[f]||a;return n?r.createElement(u,i(i({ref:t},c),{},{components:n})):r.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="Pose and Frame Conventions",l={unversionedId:"Developer Guide/poses_and_frames",id:"Developer Guide/poses_and_frames",title:"Pose and Frame Conventions",description:"Rigid body transform and points convention",source:"@site/docs/Developer Guide/poses_and_frames.md",sourceDirName:"Developer Guide",slug:"/Developer Guide/poses_and_frames",permalink:"/farm-ng-core/docs/Developer Guide/poses_and_frames",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Contributor Guide",permalink:"/farm-ng-core/docs/category/contributor-guide"},next:{title:"C++ Style Guide",permalink:"/farm-ng-core/docs/Developer Guide/style-guide"}},p={},s=[{value:"Rigid body transform and points convention",id:"rigid-body-transform-and-points-convention",level:2},{value:"Some details",id:"some-details",level:3},{value:"Velocity, acceleration convention",id:"velocity-acceleration-convention",level:2}],c={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pose-and-frame-conventions"},"Pose and Frame Conventions"),(0,o.kt)("h2",{id:"rigid-body-transform-and-points-convention"},"Rigid body transform and points convention"),(0,o.kt)("p",null,"Given a point in frame ",(0,o.kt)("inlineCode",{parentName:"p"},"foo"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bar_from_foo")," is the rigid body\ntransform which maps the point to frame ",(0,o.kt)("inlineCode",{parentName:"p"},"bar"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"    point_in_bar = bar_from_foo * point_in_foo\n")),(0,o.kt)("p",null,"Note that the frame names line up: ",(0,o.kt)("inlineCode",{parentName:"p"},"bar")," - ",(0,o.kt)("inlineCode",{parentName:"p"},"bar"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," - ",(0,o.kt)("inlineCode",{parentName:"p"},"foo"),"."),(0,o.kt)("h3",{id:"some-details"},"Some details"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If necessary to resolved ambiguities, e.g. between rotations and rigid\nbody transforms, we use a corresponding notation, e.g.\n",(0,o.kt)("inlineCode",{parentName:"p"},"bar_form_foo_rotation"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bar_form_foo_se3s")," etc.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If we have a list (or vector, or map) of transforms we write:, e.g.:"),(0,o.kt)("p",{parentName:"li"},"   bar_from_foo_rotations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Transforms with compound frame names, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"robot_base")," or\n",(0,o.kt)("inlineCode",{parentName:"p"},"left_camera"),", are written as follows::"),(0,o.kt)("p",{parentName:"li"},"   robot_base_from_left_camera")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For functions and methods we use ",(0,o.kt)("inlineCode",{parentName:"p"},"camelCase"),". Examples::"),(0,o.kt)("p",{parentName:"li"},"   this->calcRobotBaseFromLeftCamera();"),(0,o.kt)("p",{parentName:"li"},"   other->setBarFromFoo(bar_from_foo);")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We use the ",(0,o.kt)("inlineCode",{parentName:"p"},"entity_in_frame")," conventions for points and other entities\nwhich have one frame attached to it. Examples:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"point_in_camera")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"circle_in_image")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"camera_position_in_world")," (or short ",(0,o.kt)("inlineCode",{parentName:"li"},"camera_in_world"),")"),(0,o.kt)("li",{parentName:"ul"},"..."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When storing transforms / using them in interfaces, prefer the\n",(0,o.kt)("inlineCode",{parentName:"p"},"parent_from_child")," convention."),(0,o.kt)("p",{parentName:"li"},"E.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"world_from_sensor_rig"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"sensor_rig_from_camera"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"robot_from_imu")," (and not ",(0,o.kt)("inlineCode",{parentName:"p"},"sensor_rig_from_world")," etc.)."),(0,o.kt)("p",{parentName:"li"},"It is easier to reason about the pose of camera in the world frame, then\nthe pose of the world origin in the camera frame."))),(0,o.kt)("h2",{id:"velocity-acceleration-convention"},"Velocity, acceleration convention"),(0,o.kt)("p",null,"This section includes convention for entities which require three frames such\nas velocities, and accelerations. We will focus the discussion on velocities,\nbut the same conventions apply to accelerations and similar entities similarly."),(0,o.kt)("p",null,"For velocities, the three frame of interest are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("strong",{parentName:"li"},"anchor frame")," we compare the motion to"),(0,o.kt)("li",{parentName:"ul"},"the frame of the ",(0,o.kt)("strong",{parentName:"li"},"entity")," in motion"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("strong",{parentName:"li"},"frame of origin")," in which the velocity is expressed")),(0,o.kt)("p",null,"Let ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," by the anchor frame, ",(0,o.kt)("inlineCode",{parentName:"p"},"entity")," the frame on the body in motion\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"origin")," the origin frame.\nThen we write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"foo_anchored_entity_velocity_in_origin\n")),(0,o.kt)("p",null,"Let first give a few examples to illustrate velocities of rigid bodies in\ngeneral, why we need three frames to annotate velocities, and what the\ndifference between is between the anchor frame and the origin is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"world_anchored_robot_velocity_in_robot"),": Ego-centric velocity of the robot\nwith respect to the world frame, expressed in the robot frame. For 2d\nisometries, the velocity or tangent vector is a 3-vector (vx, vy, w),\nwhich consists of linear velocity (vx, vy) - i.e. forward and sideway and\nangular rate (w). For 3d rigid body transforms, the velocity vector is a\n6-vector (vx, vy, vz, wx, wy, wz), which consists of linear velocity (vx,\nvy, vz) and angular rate (wx, wy, wz).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"world_anchored_robot_velocity_in_world"),": Velocity of the\nrobot with respect to the world frame, expressed in the world frame. Here,\nthe velocities (such as the linear vx, vy) are not ego-centric\n(forward, sideways) but world-centric (e.g. North-South, East-West).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"car1_anchored_car2_velocity_in_track"),": Relative velocity of car2 with\nrespect to car1, expressed in the race track frame."))),(0,o.kt)("p",null,"It is cumbersome, to always annotate velocities with three frames. If it is\nclear from context what"),(0,o.kt)("p",null,"  (a) the anchor frame (e.g. the world frame) and the\n(b) entity in motion is (e.g. the robot),"),(0,o.kt)("p",null,"we use the following conventions which only annotate the origin frame:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"velocity_in_bar\n")),(0,o.kt)("p",null,"which is short for ",(0,o.kt)("inlineCode",{parentName:"p"},"world_anchored_robot_velocity_in_bar"),". In particular,\nwe write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"velocity_in_world\n")),(0,o.kt)("p",null,"for the world-centric velocity ",(0,o.kt)("inlineCode",{parentName:"p"},"world_anchored_robot_velocity_in_world "),"\n(robot is moving WEST with a speed of 5 mps), and"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"velocity_in_robot\n")),(0,o.kt)("p",null,"for the egocentric velocity ",(0,o.kt)("inlineCode",{parentName:"p"},"world_anchored_robot_velocity_in_robot")," (robot is\nmoving forward with a speed of 5 mps)."))}d.isMDXComponent=!0}}]);