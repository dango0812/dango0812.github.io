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
                <div
                    className={styles["typography-box"]}
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

                    <p
                        className={styles["caption"]}
                    >
                        사용자가 직관적으로 이해하고 편하게 사용할 수 있는 인터페이스를 만드는 걸 좋아합니다.<br/>
                        팀원들과 함께 고민하고 발전시키는 과정에서 가장 큰 보람을 느껴요.<br/>
                        가독성 좋은 코드를 고민하고, 새로운 기술에도 호기심을 가지고 도전하는 편입니다.<br/>
                        끊임없이 배우고 성장하며, 더 나은 사용자 경험을 만들어가고 싶습니다.
                    </p>
                </div>

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