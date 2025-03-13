// next
import Image from "next/image";
// icons
import SmailIcon from "@components/icons/SmailIcon";
// styles
import styles from "./hero.module.scss";

export default function HeroSection() {
    return (
        <section
            className={styles.root}
        >
            <div
                className={styles["container"]}
            >
                <h1
                    className={styles["title"]}
                >
                    안녕하세요.
                    <SmailIcon
                        className={styles["smail-icon"]}
                        width={64}
                        height={64}
                    />
                    <br/>
                    프론트엔드 개발자 김동규입니다.
                </h1>

                
                <div
                    className={styles["profile-container"]}
                >
                    <div
                        className={styles["profile-decoration"]}
                    >
                        {[...Array(2)].map((_, idx) => (
                            <svg
                                key={idx}
                                className={styles["svg-decoration"]}
                                width="14"
                                height="174"
                                viewBox="0 0 14 174"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M2.51941 173C2.51941 173 7.38479 157.25 8.36629 138.367C9.95038 107.89 1.54644 76.3391 3.99852 45.8375C5.61543 25.7247 11.2166 -1.99999 11.2166 -1.99999" stroke="black" strokeWidth="3.77921" />
                            </svg>
                        ))}
                    </div>

                    <Image
                        className={styles["profile-image"]}
                        src="/assets/profile.png"
                        width={360}
                        height={360}
                        alt="profile"
                    />
                </div>
            </div>
        </section>
    )
}