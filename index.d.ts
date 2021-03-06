export function sendText(config)
export function sendPhoneCall(phoneNumber, phoneAppOnly?: boolean)
export function sendPhoneDial(phoneNumber, phoneAppOnly?: boolean)
export function sendSms(phoneNumber, body)
export function addCalendarEvent(config)
export function isAppInstalled(packageName)
export function installRemoteApp(uri, saveAs)
export function openCalendar()
export function sendMail(mail, subject?: string, body?: string)
export function openChooserWithOptions(options, title)
export function openChooserWithMultipleOptions(options, title)
export function openMaps(query)
export function openCamera()
export function openMapsWithRoute(query, mode)
export function shareTextToLine(options)
export function shareImageToInstagram(type, mediaPath)
export function openSettings(settingsName)
export function getVoiceMailNumber()
export function getPhoneNumber()
export function openApp(packageName: string, extras: { [index: string]: string })
export function openAppWithData(packageName: string, dataUri: string, mimeType?: string, extras?: { [index: string]: string }): Promise<boolean>
export function openChromeIntent(dataUri: string): Promise<boolean>
export function openFileChooser(options, title)
export function openEmailApp()
