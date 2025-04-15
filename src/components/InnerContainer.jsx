import style from "./css-components/innerContainer.module.css";

export default function InnerContainer({ children }) {
    return <div className={style.innerContainer}>{children}</div>;
}