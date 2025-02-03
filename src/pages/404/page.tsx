// components
import { ColumnFlex } from "@/components/common/FlexBox";
import { RootStyle, Link } from "@pages/404/page.styles";
// routes
import { paths } from "@constants/paths";

export default function NotFoundPage() {
    return (
        <RootStyle>
            <ColumnFlex>
                <h1>
                    페이지를 찾을 수 없습니다.
                </h1>

                <p>
                    페이지의 주소가 잘못 입력되었거나, 변경 혹은 삭제되어 페이지를 찾을 수 없습니다.
                </p>

                <Link
                    href={paths.home}
                >
                    홈으로 이동
                </Link>
            </ColumnFlex>
        </RootStyle>
    )
}