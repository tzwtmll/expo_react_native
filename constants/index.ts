
import { NativeModules, StatusBar, Platform } from 'react-native';
const { StatusBarManager } = NativeModules;
console.log(StatusBar.currentHeight,StatusBarManager,'Platform.OS---')
export const STATUS_BAR_HEIGHT = 
  Platform.OS === 'android' ? StatusBar.currentHeight : StatusBarManager.HEIGHT;


export const CLIENT_TOKEN = 'token';
export const SCAN_KEY = 'scan';

export enum StorageKeys {
    'CLIENT_TOKEN' = 'token',
    'PROCURE_INFO' = 'procureInfo'
}