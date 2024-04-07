
Me ajude a corrifir esse erro 

---- 

> Task :expo-modules-core:stripReleaseDebugSymbols
> Task :expo-modules-core:copyReleaseJniLibsProjectAndLocalJars
> Task :expo-modules-core:bundleReleaseLocalLintAar
> Task :app:checkReleaseAarMetadata
> Task :app:processReleaseMainManifest FAILED
See https://developer.android.com/r/studio-ui/build/manifest-merger for more information about the manifest merger.
/home/expo/workingdir/build/android/app/src/main/AndroidManifest.xml Error:
	Attribute data@scheme at AndroidManifest.xml requires a placeholder substitution but no value for <appAuthRedirectScheme> is provided.
FAILURE: Build failed with an exception.
* What went wrong:
Execution failed for task ':app:processReleaseMainManifest'.
>
Manifest merger failed : Attribute data@scheme at AndroidManifest.xml requires a placeholder substitution but no value for <appAuthRedirectScheme> is provided.
* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.
> Get more help at https://help.gradle.org.
BUILD FAILED in 6m 59s
Deprecated Gradle features were used in this build, making it incompatible with Gradle 9.0.
You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.
For more on this, please refer to https://docs.gradle.org/8.3/userguide/command_line_interface.html#sec:command_line_warnings in the Gradle documentation.
595 actionable tasks: 595 executed
Error: Gradle build failed with unknown error. See logs for the "Run gradlew" phase for more information.