Making a Windows Exe in Java
============================

Reference material at http://launch4j.sourceforge.net/docs.html

Add this plugin to your Maven pom.xml.

    <plugin>
        <groupId>com.akathist.maven.plugins.launch4j</groupId>
        <artifactId>launch4j-maven-plugin</artifactId>
        <version>1.7.21</version>
        <executions>
            <execution>
                <id>l4j-clui</id>
                <phase>package</phase>
                <goals>
                    <goal>launch4j</goal>
                </goals>
                <configuration>
                    <headerType>gui</headerType><!--gui|console|jniGui32|jniConsole32-->
                    <jar>${project.build.directory}/${project.artifactId}-${project.version}-shaded.jar</jar>
                    <outfile>${project.build.directory}/TestWindowsApp.exe</outfile>
                    <downloadUrl>http://java.com/download</downloadUrl>
                    <classPath>
                        <mainClass>com.devdungeon.windowsexe.MainWindow</mainClass>
                        <preCp>anything</preCp>
                    </classPath>
                    <icon>src/main/resources/icon/devdungeon.ico</icon>
                    <jre>
                        <minVersion>1.6.0</minVersion>
                        <jdkPreference>preferJre</jdkPreference>
                    </jre>
                    <versionInfo>
                        <fileVersion>1.0.0.0</fileVersion>
                        <txtFileVersion>${project.version}</txtFileVersion>
                        <fileDescription>${project.name}</fileDescription>
                        <copyright>2016 DevDungeon.com</copyright>
                        <productVersion>1.0.0.0</productVersion>
                        <txtProductVersion>1.0.0.0</txtProductVersion>
                        <productName>${project.name}</productName>
                        <companyName>devdungeon.com</companyName>
                        <internalName>DevDungeon</internalName>
                        <originalFilename>TestWindowsApp.exe</originalFilename>
                    </versionInfo>
                </configuration>
            </execution>
        </executions>
    </plugin>


# Sample launch4j configuration options

    <!--
      Bold elements are required.
      Underlined values are the default when the element is not specified.
      %VAR% expands environment/special variables and registry keys.
    -->
    <launch4jConfig>
      <headerType>gui|console|jniGui32|jniConsole32</headerType>
      <outfile>file.exe</outfile>
      <jar>file</jar>
      <dontWrapJar>true|false</dontWrapJar>
      <errTitle>application name</errTitle>
      <downloadUrl>http://java.com/download</downloadUrl>
      <supportUrl>url</supportUrl>
      <cmdLine>text</cmdLine>
      <chdir>path</chdir>
      <priority>normal|idle|high</priority>
      <stayAlive>true|false</stayAlive>
      <restartOnCrash>true|false</restartOnCrash>
      <icon>file</icon>
      <obj>header object file</obj>
      ...
      <lib>w32api lib</lib>
      ...
      <var>var=text (%VAR%)</var>
      ...
      <classPath>
        <mainClass>main class</mainClass>
        <cp>classpath (%VAR%)</cp>
        ...
      </classPath>
      <singleInstance>
        <mutexName>text</mutexName>
        <windowTitle>text</windowTitle>
      </singleInstance> 
      <jre>
        <!-- Specify path or minVersion or both. -->
        <path>bundled JRE path (%VAR%)</path>
        <bundledJre64Bit>true|false</bundledJre64Bit>
        <bundledJreAsFallback>true|false</bundledJreAsFallback>
        <minVersion>x.x.x[_xx]</minVersion>
        <maxVersion>x.x.x[_xx]</maxVersion>
        <jdkPreference>jreOnly|preferJre|preferJdk|jdkOnly</jdkPreference>
        <runtimeBits>64|64/32|32/64|32</runtimeBits>
        <!-- Heap sizes in MB and % of available memory. -->
        <initialHeapSize>MB</initialHeapSize>
        <initialHeapPercent>%</initialHeapPercent>
        <maxHeapSize>MB</maxHeapSize>
        <maxHeapPercent>%</maxHeapPercent>
        <opt>text (%VAR%)</opt>
        ...
      </jre>
      <splash>
        <file>file</file>
        <waitForWindow>true|false</waitForWindow>
        <timeout>seconds [60]</timeout>
        <timeoutErr>true|false</timeoutErr>
      </splash>
      <versionInfo>
        <fileVersion>x.x.x.x</fileVersion>
        <txtFileVersion>text</txtFileVersion>
        <fileDescription>text</fileDescription>
        <copyright>text</copyright>
        <productVersion>x.x.x.x</productVersion>
        <txtProductVersion>text</txtProductVersion>
        <productName>text</productName>
        <companyName>text</companyName>
        <internalName>filename</internalName>
        <originalFilename>filename.exe</originalFilename>
        <trademarks>text</trademarks>
        <language>
          ALBANIAN|ARABIC|BAHASA|DUTCH_BELGIAN|FRENCH_BELGIAN|BULGARIAN|
          FRENCH_CANADIAN|CASTILIAN_SPANISH|CATALAN|CROATO_SERBIAN_LATIN|
          CZECH|DANISH|DUTCH|ENGLISH_UK|ENGLISH_US|FINNISH|FRENCH|GERMAN|
          GREEK|HEBREW|HUNGARIAN|ICELANDIC|ITALIAN|JAPANESE|KOREAN|
          NORWEGIAN_BOKMAL|NORWEGIAN_NYNORSK|POLISH|PORTUGUESE_BRAZIL|
          PORTUGUESE_PORTUGAL|RHAETO_ROMANIC|ROMANIAN|RUSSIAN|
          SERBO_CROATIAN_CYRILLIC|SIMPLIFIED_CHINESE|SLOVAK|SPANISH_MEXICO|
          SWEDISH|FRENCH_SWISS|GERMAN_SWISS|ITALIAN_SWISS|THAI|
          TRADITIONAL_CHINESE|TURKISH|URDU
        </language>
      </versionInfo>
      <messages>
        <startupErr>text</startupErr>
        <bundledJreErr>text</bundledJreErr>
        <jreVersionErr>text</jreVersionErr>
        <launcherErr>text</launcherErr>
        <!-- Used by console header only. -->
        <instanceAlreadyExistsMsg>text</instanceAlreadyExistsMsg>
      </messages>
    </launch4jConfig>