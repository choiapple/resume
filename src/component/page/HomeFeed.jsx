import Image from "next/image";
import Link from "next/link";

function HomeFeed() {
  return (
    <div className="homeWrap">
      <div className="homeContent">
        <div className="homeBox">
          <div className="homePhoto">
            <Image src={"/idphoto.jpg"} alt="증명사진" width={354} height={472}/>
          </div>
          <div className="homeDescript">
            <div className="homeDescriptTitle">contact.</div>
            <div className="homeDescriptElement">Email. cj5255@naver.com</div>
            <div className="homeDescriptElement">Phone. 010-9945-5255</div>
            <div className="homeDescriptTitle">channel.</div>
            <div className="homeDescriptElement">
              Github.
              <Link href={"https://github.com/choiapple"} target="_blank">
                https://github.com/choiapple
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="homeContent">
        <div className="homeLargeTitle">Introduce.</div>
        <div className="homeBox">
          <div className="homeInroduce">
            기술로 가치를 만들고, 가치로 사용자를 잇고 싶은 프론트엔드 개발자
            최진석입니다. React, Next.js를 주로 다루며 어제보다 오늘이
            조금이라도 더 나을 수 있게 꾸준히 학습하고, 문서화하여 정리합니다.
            맡은일에 책임감을 가지며, 당장 해결이 되지않는 문제에 대해 어떻게
            하면 정확하고 빠르게 해결할 수 있을지에 대해 고민하고 행동합니다.
          </div>
        </div>
      </div>
      <div className="homeContent">
        <div className="homeLargeTitle">Experience.</div>
        <div className="homeBox">
          <div>스파로스 아카데미 1기 (2022. 07 ~ 2022. 11)</div>
          <div className="homeInroduce">
            <div>- 1기 프론트엔드 직무</div>
            <div>- React기반의 웹 애플리케이션 개발</div>
            <div>- 팀 프로젝트 및 협업 경험</div>
          </div>
        </div>
      </div>
      <div className="homeContent">
        <div className="homeLargeTitle">Skill.</div>
        <div className="homeBox">
          <div className="homeInroduce">
            <div>- Front-End: JavaScript, React.js, Next.js, HTML/CSS</div>
          </div>
        </div>
      </div>
      <div className="homeContent">
        <div className="homeLargeTitle">Education.</div>
        <div className="homeBox">
          <div className="homeInroduce">
            <div>
              2016.03-2022.08 부산대학교 바이오소재과학과, 빅데이터연계전공
            </div>
          </div>
        </div>
      </div>
      <div className="homeContent">
        <div className="homeLargeTitle">Project.</div>
        <div className="homeBox">
          <div>
            <div>신세계몰 클론 프로젝트 (2022. 07 ~ 09 2개월)</div>
            <div>
              <Link
                href={"https://github.com/choiapple/jojo_cloneproject_front"}
                target="_blank"
              >
                링크
              </Link>
            </div>
          </div>

          <div className="homeInroduce">
            <div>- FrontEnd(React.js)</div>
            <div>- User, Category 퍼블리싱 및 기능 구현</div>
            <div>- 페이징처리 구현</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeFeed;
