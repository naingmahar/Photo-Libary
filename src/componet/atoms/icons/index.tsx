import * as Icons from './icons';
import styles from "./icon.module.css";

export enum IconKey {
    order = "OrderIcons",
    product = "ProductIcons",
    setting = "SettingIcons",
    noti="NotiIcon",
    shoppingCart = "ShoppingCart",
    shareIcon = "ShareIcon",
    customers = "CustomerIcon",
    name="NameIcon",
    price="PriceIcon",
    addIcon = "AddIcon",
    cross = "CrossIcon",
    photo= "PhotoIcon",
    category = "CategoryIcon",
    back = "BackIcon",
    delete = "DeleteIcon",
    edit = "EditIcon",
    close = "CloseIcon",
    user="UserIcon",
    nav="NavBarIcon",
    info="InfoIcon",
    addDocument="AddDocumentIcon",
    success="SuccessIcon",
    fail="FailIcon",
    refresh="RefreshIcon",
    phone="PhoneIcon",
    shop="ShopIcon",
    addShoppingCart = "AddShoppingCart",
    delivery="DeliveryIcon",
    next="NextIcon",
    package="PackageIcon",
    group="GroupIcon",
    dropDown="DropDownIcon",
    clock="ClockIcon",
    calendar="CalendarIcon",
    greaterThan="GreaterIcon",
    lessThan="LessIcon",
    pending="PendingIcon"
}


interface IconProps {
    icon: IconKey,
    className?: string
    active?: boolean,
    size?:IconsSize
}

export enum IconsSize {
    xs = "w-4 h-4",
    sm = "w-4 h-4 lg:w-5 lg:h-5",
    normal = "w-6 h-6",
    lg = "w-8 h-8",
    xl = "w-10 h-10",
    xxl = "w-24 h-24",
    picture = "w-32 h-32",
    picture_lg = "w-56 h-56",
} 

export const Icon = (props:IconProps) =>{
    let style = props.active ? styles.iconColorNavActive : styles.iconColorNav
    const size = props.size ? props.size : IconsSize.normal 
    return Icons[props.icon]({className:`${props.className ?? style} ${size}`,bold:props.active})
}


