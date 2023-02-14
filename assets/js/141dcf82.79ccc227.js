"use strict";(self.webpackChunktouchlab=self.webpackChunktouchlab||[]).push([[661],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var a=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,a,i=function(e,t){if(null==e)return{};var o,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(o),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||n;return o?a.createElement(h,s(s({ref:t},c),{},{components:o})):a.createElement(h,s({ref:t},c))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,s=new Array(n);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var p=2;p<n;p++)s[p]=o[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},2039:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>r,toc:()=>p});var a=o(7462),i=(o(7294),o(3905));const n={title:"Using Compose Across Platforms",authors:["kpgalligan"],image:"/blog/Compose-across-platforms.png",tags:["kotlin-multiplatform","compose"]},s=void 0,r={permalink:"/blog/2022/12/9/Using-Compose-Across-Platforms",editUrl:"https://github.com/kpgalligan/kpgalligan.github.io/tree/main/website/blog/2022-12-9-Using-Compose-Across-Platforms.md",source:"@site/blog/2022-12-9-Using-Compose-Across-Platforms.md",title:"Using Compose Across Platforms",description:"Let\u2019s look at the differences you\u2019ll encounter when using Compose for different platforms.  I have spent more time with some (Android) than the others, but I have experienced how it has progressed from its early states to the current versions. The initial frustration quickly turned into enjoyment. Here are answers to some basic questions you might have such as: How hard is it to set up, use and debug, what is unique for each platform? And what else can Compose be used for?",date:"2022-12-09T00:00:00.000Z",formattedDate:"December 9, 2022",tags:[{label:"kotlin-multiplatform",permalink:"/blog/tags/kotlin-multiplatform"},{label:"compose",permalink:"/blog/tags/compose"}],readingTime:9.09,hasTruncateMarker:!0,authors:[{name:"Kevin Galligan",title:"Touchlab person",url:"https://www.kgalligan.com",imageURL:"https://github.com/kpgalligan.png",key:"kpgalligan"}],frontMatter:{title:"Using Compose Across Platforms",authors:["kpgalligan"],image:"/blog/Compose-across-platforms.png",tags:["kotlin-multiplatform","compose"]},prevItem:{title:"OK Again",permalink:"/blog/2022/12/11/OKAgain"}},l={authorsImageUrls:[void 0]},p=[{value:"Show a repo",id:"show-a-repo",level:2},{value:"The Best Thing About Compose UI Is Shareable code",id:"the-best-thing-about-compose-ui-is-shareable-code",level:2},{value:"Platform Specific components",id:"platform-specific-components",level:2},{value:"Android",id:"android",level:3},{value:"Desktop",id:"desktop",level:3},{value:"iOS",id:"ios",level:3},{value:"Web",id:"web",level:3},{value:"Is Compose UI Production Ready?",id:"is-compose-ui-production-ready",level:2},{value:"Android",id:"android-1",level:3},{value:"Desktop and Web",id:"desktop-and-web",level:3},{value:"iOS",id:"ios-1",level:3},{value:"How to Set up Compose UI",id:"how-to-set-up-compose-ui",level:2},{value:"Android",id:"android-2",level:3},{value:"Desktop",id:"desktop-1",level:3},{value:"iOS",id:"ios-2",level:3},{value:"Web",id:"web-1",level:3},{value:"Preview support",id:"preview-support",level:2},{value:"Testing Compose UI",id:"testing-compose-ui",level:2},{value:"UI testing",id:"ui-testing",level:3},{value:"Paparazzi",id:"paparazzi",level:3},{value:"Useful libraries and tools",id:"useful-libraries-and-tools",level:2},{value:"Molecule",id:"molecule",level:3},{value:"Aurora",id:"aurora",level:3},{value:"xcode-kotlin",id:"xcode-kotlin",level:3},{value:"KMMBridge",id:"kmmbridge",level:3},{value:"Relay (Figma)",id:"relay-figma",level:3},{value:"Other things to do with Compose",id:"other-things-to-do-with-compose",level:2},{value:"Redwood",id:"redwood",level:3},{value:"Mosaic",id:"mosaic",level:3},{value:"Personal opinion",id:"personal-opinion",level:2}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Let\u2019s look at the differences you\u2019ll encounter when using Compose for different platforms. "," I have spent more time with some (Android) than the others, but I have experienced how it has progressed from its early states to the current versions. The initial frustration quickly turned into enjoyment. Here are answers to some basic questions you might have such as: How hard is it to set up, use and debug, what is unique for each platform? And what else can Compose be used for?"),(0,i.kt)("tlContactUs",{link:"https://touchlab.co/contact-us/",message:"Compose is an important part of any developer\u2019s toolkit. Learn more about how tools like Compose and KMM will help your team meet their goals.",buttonMessage:"Contact Us"}),(0,i.kt)("h2",{id:"show-a-repo"},"Show a repo"),(0,i.kt)("github",{org:"touchlab",repo:"KaMPKit"}),(0,i.kt)("h2",{id:"the-best-thing-about-compose-ui-is-shareable-code"},"The Best Thing About Compose UI Is Shareable code",(0,i.kt)("a",{parentName:"h2",href:"https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#shareable-code"})),(0,i.kt)("p",null,"One of the best things about using Compose UI is the ability to share code between different platforms. As shown in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/touchlab/DroidconKotlin"},"the Droidcon app"),", we managed to share the majority of views between Android and iOS applications. You can read more about the experience ",(0,i.kt)("a",{parentName:"p",href:"https://touchlab.co/compose-ui-for-ios/"},"here"),". It\u2019s even easier to share views between Android and Desktop, since both are JVM targets and thus share more functions. But not everything can be shared. Some components you want to use are platform specific, or maybe you want some parts of the views different for each platform, for these occasions there are ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/multiplatform-connect-to-apis.html"},"expect/actual declarations")," that enable us to use different implementations for platforms. But the basic components like Column, Row, Box, Text \u2026 can be shared between all the platforms (in Compose for Web these primitives and widgets are still experimental, and it\u2019s just a small subset when compared to Desktop and Android)."),(0,i.kt)("h2",{id:"platform-specific-components"},"Platform Specific components",(0,i.kt)("a",{parentName:"h2",href:"https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#specific-components"})),(0,i.kt)("p",null,"This is not a complete list of platform specific components, just examples of things I stumbled upon and found useful or interesting."),(0,i.kt)("h3",{id:"android"},"Android",(0,i.kt)("a",{parentName:"h3",href:"https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#android"})),(0,i.kt)("p",null,"There are some ",(0,i.kt)("a",{parentName:"p",href:"https://google.github.io/accompanist/"},"Accompanist libraries")," that are specific to Android, but they are slowly being added to the Compose foundation library. For example, ",(0,i.kt)("a",{parentName:"p",href:"https://google.github.io/accompanist/insets/"},"Insets")," has been deprecated and added to Compose itself just recently. Usage of XML layouts is also specific to Android; you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"AndroidView")," when you want to use an XML layout in your Compose function (for times when you either don\u2019t want to rewrite it in Compose or the component doesn\u2019t exist yet) (",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/jetpack/compose/interop/interop-apis#views-in-compose"},"interoperability guide"),"). I had this problem when I wanted to use star rating and a range slider, but that was some time ago."),(0,i.kt)("h3",{id:"desktop"},"Desktop",(0,i.kt)("a",{parentName:"h3",href:"https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#desktop"})),(0,i.kt)("p",null,"User experience when working with a desktop app is different from a mobile app, so there are some specific components that can be used when creating the UI. One such component is ",(0,i.kt)("inlineCode",{parentName:"p"},"Window"),", it\u2019s the main thing you create to have a place where your content will show. It has many properties, such as window state (What\u2019s the position and size? Is the window fullscreen?) or resizable. For adding a menu that opens on right click use ContextMenuArea with ContextMenuItems as options. We can also specify groups and options in the top menu with the component called MenuBar, or create multiple menus, add separators and add custom keyboard shortcuts to items. Don\u2019t forget, anywhere you need to add user interactions, you can use keyboard shortcuts. In Android development we are limited to click, double click and long click, but here we can use any combination of keys and mouse buttons, like Alt + Left Click (it took me some time to get used to these new options)."),(0,i.kt)("h3",{id:"ios"},"iOS",(0,i.kt)("a",{parentName:"h3",href:"https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#ios"})),(0,i.kt)("p",null,"In iOS module in Kotlin projects, we have access to UIKit components such as ",(0,i.kt)("inlineCode",{parentName:"p"},"UIImage")," and other iOS specific classes."),(0,i.kt)("h3",{id:"web"},"Web",(0,i.kt)("a",{parentName:"h3",href:"https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#web"})),(0,i.kt)("p",null,"You can use the same tags in Compose as you would in HTML or JSX, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"P"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"Div"),". JetBrains is also designing a typesafe DSL for style sheets for express CSS rules in Kotlin code."),(0,i.kt)("h2",{id:"is-compose-ui-production-ready"},"Is Compose UI Production Ready?",(0,i.kt)("a",{parentName:"h2",href:"https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#production-ready"})),(0,i.kt)("p",null,"Are apps with Compose being used in production? Should you?"),(0,i.kt)("h3",{id:"android-1"},"Android",(0,i.kt)("a",{parentName:"h3",href:"https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#android-1"})),(0,i.kt)("p",null,"A stable version of Jetpack compose for Android was ",(0,i.kt)("a",{parentName:"p",href:"https://android-developers.googleblog.com/2021/07/jetpack-compose-announcement.html"},"announced")," at the end of July 2021. According to ",(0,i.kt)("a",{parentName:"p",href:"https://android-developers.googleblog.com/2022/10/whats-new-in-jetpack-compose.html"},"Google\u2019s blog post"),", since this year\u2019s Google I/O event the number of top 1000 apps on Google Play using Compose has increased by 50%. Many companies, big and small, use Compose for their apps and report significant reduction in lines of code and increase in performance and developer productivity. Even ",(0,i.kt)("a",{parentName:"p",href:"https://android-developers.googleblog.com/2022/03/play-time-with-jetpack-compose.html"},"Google Play Store")," decided to adopt Jetpack Compose as it\u2019s UI framework when in 2020 the entire tech stack was revised, with success: \u201cThe Play Store\u2019s adoption of Compose has been a boon for our team\u2019s developer happiness, and a big step-up for code quality and health\u201d."),(0,i.kt)("h3",{id:"desktop-and-web"},"Desktop and Web",(0,i.kt)("a",{parentName:"h3",href:"https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#desktop-and-web"})),(0,i.kt)("p",null,"Compose Multiplatform UI framework by JetBrains is in stable 1.2.1 version as of writing this post, with the first stable version 1.0 released in December 2021."),(0,i.kt)("p",null,"However, Compose for web is very low-level right now and doesn\u2019t have any of the higher level web framework support that we have come to expect. Everything feels very experimental."),(0,i.kt)("h3",{id:"ios-1"},"iOS",(0,i.kt)("a",{parentName:"h3",href:"https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#ios-1"})),(0,i.kt)("p",null,"Even though the first iOS application built in Compose UI in App Store (Droidcon New York) was published by Touchlab in August 2022, Compose UI for iOS is not production ready yet, for now it\u2019s still in the development state, so we need to be patient."),(0,i.kt)("h2",{id:"how-to-set-up-compose-ui"},"How to Set up Compose UI",(0,i.kt)("a",{parentName:"h2",href:"https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#setup"})),(0,i.kt)("h3",{id:"android-2"},"Android",(0,i.kt)("a",{parentName:"h3",href:"https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#android-2"})),(0,i.kt)("p",null,"When creating a project in Android Studio, Compose can be added automatically. In case you want to migrate an existing project, you can follow ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/jetpack/compose/interop"},"this guide")," to set up Compose."),(0,i.kt)("p",null,"If you want to add compose manually, in module\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"build.gradle")," inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"android")," set"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'buildFeatures {\n   compose = true\n}\n\ncomposeOptions {\n    kotlinCompilerExtensionVersion = "${VERSION}"\n}\n')),(0,i.kt)("p",null,"and add ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/jetpack/androidx/releases/compose"},"dependencies")," (",(0,i.kt)("inlineCode",{parentName:"p"},"ui"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"foundation"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"material"),", etc.)."),(0,i.kt)("p",null,"For navigation, you can use ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/jetpack/compose/navigation"},"Navigation Component"),", that is similar to Navigation Component used with XMLs."),(0,i.kt)("h3",{id:"desktop-1"},"Desktop",(0,i.kt)("a",{parentName:"h3",href:"https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#desktop-1"})),(0,i.kt)("p",null,"To use Compose in a desktop application you need to use the ",(0,i.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/lp/compose-mpp/"},"Compose Multiplatform framework by JetBrains"),". IntelliJ IDEA (version 2020.3 and newer) comes with a wizard that will configure the project with Compose for you at creation."),(0,i.kt)("p",null,"When adding it manually add"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'maven("https://maven.pkg.jetbrains.space/public/p/compose/dev")\n')),(0,i.kt)("p",null,"to your plugin management repositories in ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.gradle")," and"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'plugins {\n   id("org.jetbrains.compose") version "${VERSION}"\n}\n\ncompose.desktop {\n   application {\n       mainClass = "MainKt"\n   }\n}\n')),(0,i.kt)("p",null,"to ",(0,i.kt)("inlineCode",{parentName:"p"},"build.gradle"),". For a full setup guide visit ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/JetBrains/compose-jb/tree/master/tutorials/Getting_Started"},"Getting Started"),"."),(0,i.kt)("h3",{id:"ios-2"},"iOS",(0,i.kt)("a",{parentName:"h3",href:"https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#ios-2"})),(0,i.kt)("p",null,"You will need a Kotlin project that will be included in your Swift build. Set up Compose Multiplatform JetBrains framework in Kotlin project\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"build.gradle")," similarly to desktop. Then you will need to create an entry point function, which will be called from Swift code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun getRootController(viewModel: ApplicationViewModel) = Application("MainComposeView") {\n   MainComposeView(viewModel)\n}\n')),(0,i.kt)("p",null,"For more info about our app with Compose for iOS visit ",(0,i.kt)("a",{parentName:"p",href:"https://touchlab.co/compose-ui-for-ios/"},"this blogpost"),"."),(0,i.kt)("h3",{id:"web-1"},"Web",(0,i.kt)("a",{parentName:"h3",href:"https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#web-1"})),(0,i.kt)("p",null,"As with iOS and desktop you will need ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jetbrains/compose-jb"},"the framework by JetBrains"),". Set up the project in IntelliJ IDEA with wizard by selecting ",(0,i.kt)("inlineCode",{parentName:"p"},"Compose Mutliplatform")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Platform: Web"),". You can find the full guide ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/JetBrains/compose-jb/tree/master/tutorials/Web/Getting_Started"},"here"),"."),(0,i.kt)("h2",{id:"preview-support"},"Preview support",(0,i.kt)("a",{parentName:"h2",href:"https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#preview-support"})),(0,i.kt)("p",null,"When working in compose, especially if you are just starting, it\u2019s nice to immediately see what you are working on. Previews work for all the platforms in IntelliJ IDEA and for Android in Android Studio quite well. You just need to create a function tagged with @Preview and @Composable and call the function you want to see the preview of."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Preview\n@Composable\nfun MyScreenPreview() {\n   MyScreen()\n}\n")),(0,i.kt)("p",null,"Sometimes loading the preview takes time, and sometimes it requires you to rebuild the project, but (at the time of writing) it works pretty well. The only problem is if you get some data in your composable function through input parameters, you would need to have mock data to pass in inside the preview."),(0,i.kt)("h2",{id:"testing-compose-ui"},"Testing",(0,i.kt)("a",{parentName:"h2",href:"https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#testing"})," Compose UI"),(0,i.kt)("h3",{id:"ui-testing"},"UI testing",(0,i.kt)("a",{parentName:"h3",href:"https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#ui-testing"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/jetpack/compose/testing"},"Testing UI")," written in compose is different from testing a view-based UI. It uses semantics to interact with the view hierarchy. The semantics tree is generated alongside the UI hierarchy, and describes it. Setting up a Compose content for tests is done through AndroidComposeTestRule. In the tests there are three APIs for interaction with elements: finders, assertions and actions."),(0,i.kt)("h3",{id:"paparazzi"},"Paparazzi",(0,i.kt)("a",{parentName:"h3",href:"https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#paparazzi"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cashapp/paparazzi"},"Paparazzi by Square")," is a library for rendering application screens without a physical device or emulator. It is used when doing snapshot (screenshot) testing \u2013 this testing detects if the UI has changed unintentionally. First a screenshot is saved of a screen or component after it is built. Then when verifying, the snapshot test takes a new screenshot and compares them. The snapshot test fails if they are not identical."),(0,i.kt)("h2",{id:"useful-libraries-and-tools"},"Useful libraries and tools",(0,i.kt)("a",{parentName:"h2",href:"https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#useful-libraries-and-tools"})),(0,i.kt)("h3",{id:"molecule"},"Molecule",(0,i.kt)("a",{parentName:"h3",href:"https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#molecule"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cashapp/molecule"},"Molecule by Square")," is a library for turning Flows into StateFlows so that you don\u2019t need to mix business logic with display logic in the UI layer by setting up a default value when observing the Flow in Compose."),(0,i.kt)("h3",{id:"aurora"},"Aurora",(0,i.kt)("a",{parentName:"h3",href:"https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#aurora"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/kirill-grouchnikov/aurora"},"Aurora")," is a collection of libraries for writing modern, elegant, and fast desktop Compose applications."),(0,i.kt)("h3",{id:"xcode-kotlin"},"xcode-kotlin",(0,i.kt)("a",{parentName:"h3",href:"https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#xcode-kotlin"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/touchlab/xcode-kotlin"},"Xcode-kotlin")," is a plugin that enables iOS developers to debug kotlin code directly from Xcode."),(0,i.kt)("h3",{id:"kmmbridge"},"KMMBridge",(0,i.kt)("a",{parentName:"h3",href:"https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#kmmbridge"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/touchlab/KMMBridge"},"KMMBridge")," is another tool that helps iOS developers transition more easily to KMM development. It is a set of Gradle tooling that facilitates publishing and consuming pre-built KMM (Kotlin Multiplatform Mobile) Xcode Framework binaries. The modules can be published to various back ends, public or private, and (currently) consumed by either CocoaPods or Swift Package Manager."),(0,i.kt)("h3",{id:"relay-figma"},"Relay (Figma)",(0,i.kt)("a",{parentName:"h3",href:"https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#relay-figma"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/jetpack/compose/tooling/relay"},"Relay by Google")," is a tool for creating Compose layouts from UI designs. There is a plugin for Figma that enables designers to annotate and package UI components for developer use, including information about layout, styling, dynamic content, and interaction behavior. There is also an Android Studio plugin for importing these UI Packages and generating Compose code."),(0,i.kt)("h2",{id:"other-things-to-do-with-compose"},"Other things to do with Compose",(0,i.kt)("a",{parentName:"h2",href:"https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#other-things-to-do-with-compose"})),(0,i.kt)("h3",{id:"redwood"},"Redwood",(0,i.kt)("a",{parentName:"h3",href:"https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#redwood"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cashapp/redwood"},"Redwood by Square")," is a library for implementing a shared UI for Android, iOS and Web built on the fact that the Compose compiler can be used without Compose UI. It allows declaring common UI widgets and then declaring how those widgets are implemented on each platform. That way the final UI can be native, but driven using the common Redwood code. Additionally, Redwood gives you the option to change application behavior without waiting for users to update their apps. With Kotlin/JS you may download an update of your composable functions at application launch time, and run them in a JavaScript VM."),(0,i.kt)("h3",{id:"mosaic"},"Mosaic",(0,i.kt)("a",{parentName:"h3",href:"https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#mosaic"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/JakeWharton/mosaic"},"Mosaic by Jake Wharton")," is an experimental tool for building console UI in Kotlin using the Jetpack Compose compiler/runtime."),(0,i.kt)("h2",{id:"personal-opinion"},"Personal opinion",(0,i.kt)("a",{parentName:"h2",href:"https://lively-glacier-0e2009b10-49.centralus.1.azurestaticapps.net/blog/2022/11/23/compose-across-platforms#personal-opinion"})),(0,i.kt)("p",null,"Since I started using Compose UI over a year ago it has changed and matured a lot. Yes, there were some complications, especially before the stable version, but I can say it has been a lot of fun developing in Compose. I would advise everyone, not just Android developers, to try it out, you might enjoy it as much as I do."),(0,i.kt)("tlNewsletter",null))}d.isMDXComponent=!0}}]);