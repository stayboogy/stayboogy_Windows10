reg import C:\Stayboogy\reg\CmdHereWindows10.reg
reg import C:\Stayboogy\reg\AlwaysAdminCMD.reg
reg import C:\Stayboogy\reg\CMDAlwaysAdmin.reg
reg import C:\Stayboogy\reg\CMDHereAsAdmin.reg
reg import C:\Stayboogy\reg\ComputerName.reg
reg import C:\Stayboogy\reg\CopyAsPath.reg
reg import C:\Stayboogy\reg\DisableStorageSense.reg
reg import C:\Stayboogy\reg\FuckGroupBy.reg
reg import C:\Stayboogy\reg\EnableNumlock.reg
reg import C:\Stayboogy\reg\NewExplorerDefault.reg
reg import C:\Stayboogy\reg\NoDumpStackLog.reg
reg import C:\Stayboogy\reg\NoOpenFileWarnings.reg
reg import C:\Stayboogy\reg\NoRecycleFilesNoIcon.reg
reg import C:\Stayboogy\reg\NoShortcutAppend.reg
reg import C:\Stayboogy\reg\reg\OpenWithNotepad.reg
reg import C:\Stayboogy\reg\OpenCMDHereAsAdmin.reg
reg import C:\Stayboogy\reg\OpenLinuxTerminalHere.reg
reg import C:\Stayboogy\reg\OpenPowerShellTerminalHere.reg
reg import C:\Stayboogy\reg\PowershellUnrestricted.reg
reg import C:\Stayboogy\reg\RemoveLibrariesThisPC.reg
reg import C:\Stayboogy\reg\TakeOwnership.reg
reg import C:\Stayboogy\reg\TimeSyncUTC.reg
reg import C:\Stayboogy\reg\StartPinFix.reg
reg import C:\Stayboogy\reg\WSLImportAfterReboot.reg
move C:\Stayboogy\Tools C:\Tools
move C:\Tools\Tools %USERPROFILE%\Desktop\Tools
reg import C:\Tools\NotePad2\x64\NotepadReplace.reg
reg import C:\Tools\UltraISO\registration.reg
powercfg.exe /hibernate off
powercfg.exe /import C:\Stayboogy\reg\high-performance.pow
bcdedit /set {current} bootmenupolicy legacy
bcdedit /timeout 5
timeout /t 7
powershell.exe C:\Stayboogy\apps\RemoveAppsFinal.ps1
wmic product where name="Dell Update" call uninstall
wmic product where name="Dell Update - SupportAssist Update Plugin" call uninstall
wmic product where name="Dell SupportAssistAgent" call uninstall
wmic product where name="Dell Digital Delivery" call uninstall
wmic product where name="Dell Power Manager Service" call uninstall
wmic product where name="SmartByte Drivers and Services" call uninstall
wmic product where name="DSC/AA Factory Installer" call uninstall
"C:\Program Files\Dell\SupportAssist\uninstaller.exe"
"C:\ProgramData\Package Cache\{9ae76d49-72b5-402c-b900-0dc71ab8ebef}\DellSupportAssistRemediationServiceInstaller.exe"
powershell.exe "Get-appxpackage -allusers Microsoft.549981C3F5F10 | Remove-AppxPackage"
powershell.exe "Get-AppxPackage | Out-GridView -PassThru | Remove-AppxPackage"
powershell.exe "Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux"
timeout /t 7
lxrun /install /y
reboot
exit


