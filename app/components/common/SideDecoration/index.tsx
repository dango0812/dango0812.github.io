// react
import { Fragment } from "react";
// styles
import styles from "./sideDecoration.module.scss";
// components
import StarfishBladeIcon from "@/components/icons/StarfishBladeIcon";

export default function SideDecoration() {
    return (
        <Fragment>
            <StarfishBladeIcon
                className={`${styles.decoration} ${styles.right}`}
                width={80}
                height={140}
                color="#00FF5E"
                crop="right"
            />

            <StarfishBladeIcon
                className={`${styles.decoration} ${styles.left}`}
                width={80}
                height={140}
                color="#F3ABCB"
                crop="left"
            />
        </Fragment>
    )
}