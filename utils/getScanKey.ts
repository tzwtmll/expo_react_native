import { SCAN_KEY} from "@/constants/index";
import { getUuid } from "@/utils/getUuid"

export const getScanKey = () => {
    return getUuid() + '-' + SCAN_KEY
}