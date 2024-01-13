import Link from "next/link";
import { FC, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faLaptop, faEllipsis, faDatabase, faServer, faFeather, faTable, faMobile, faEarthAmerica, faTag, faBlog, faMailBulk, faVoicemail, faEnvelope, faLocation, faL, faLocationPin, faLocationDot, faMotorcycle, faBicycle, faPersonBiking } from "@fortawesome/free-solid-svg-icons";
import { faApple, faGithub, faNpm, faReact, faWeixin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const Tag: FC<{ children?: ReactNode; icon?: ReactNode }> = ({ children, icon }) => {
    return (
      <div className="flex items-center gap-2 rounded-lg bg-black/80 px-6 py-4 text-white hover:bg-black">
        <span>{children}</span>
        {icon}
      </div>
    );
  };
  const HeroTitle: FC<{ children?: ReactNode }> = ({ children }) => {
    return <div className="inline-block bg-gradient-to-br from-blue-600 to-cyan-400 bg-clip-text text-transparent">{children}</div>;
  };
  return (
    <main className="flex min-h-screen flex-col items-center gap-6 px-6 py-24 *:max-w-[768px]">
      {/* name */}
      <section>
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-center text-6xl font-bold leading-[56px]">
            Hi, I&apos;m <HeroTitle>ddd</HeroTitle>
          </h1>
          <h2 className="text-center text-4xl font-bold leading-[48px]">
            I&apos;m a <HeroTitle>Software Engineer</HeroTitle>
          </h2>
        </div>
      </section>
      {/* Stack */}
      <section>
        <div >
          <h2 className="mb-2 text-center text-4xl font-bold leading-[48px]">
            <HeroTitle>Stack</HeroTitle>
          </h2>
          <ul className="flex flex-col gap-4 text-2xl font-bold">
            <li>
              <div className="mb-2 text-center">FrontEnd</div>
              <ul className="flex flex-wrap justify-center gap-2 text-base">
                <Tag icon={<FontAwesomeIcon icon={faReact} />}>React</Tag>
                <Tag icon={<FontAwesomeIcon icon={faTag} />}>Typescript</Tag>
                <Tag icon={<FontAwesomeIcon icon={faTag} />}>Electron</Tag>
                <Tag icon={<FontAwesomeIcon icon={faTag} />}>Next.js</Tag>
                <Tag icon={<FontAwesomeIcon icon={faTag} />}>Mobx</Tag>
                <Tag icon={<FontAwesomeIcon icon={faTag} />}>GSAP.js</Tag>
                <Tag icon={<FontAwesomeIcon icon={faTag} />}>Three.js</Tag>
                <Tag icon={<FontAwesomeIcon icon={faEllipsis} />}>More</Tag>
              </ul>
            </li>
            <li>
              <div className="mb-2 text-center">BackEnd</div>
              <ul className="flex flex-wrap justify-center gap-2 text-base">
                <Tag icon={<FontAwesomeIcon icon={faServer} />}>Node.js</Tag>
                <Tag icon={<FontAwesomeIcon icon={faTag} />}>Typescript</Tag>
                <Tag icon={<FontAwesomeIcon icon={faTag} />}>Nest.js</Tag>
                <Tag icon={<FontAwesomeIcon icon={faDatabase} />}>MongoDB</Tag>
                <Tag icon={<FontAwesomeIcon icon={faDatabase} />}>Redis</Tag>
                <Tag icon={<FontAwesomeIcon icon={faDatabase} />}>Linux</Tag>
                <Tag icon={<FontAwesomeIcon icon={faEllipsis} />}>More</Tag>
              </ul>
            </li>
            <li>
              <div className="mb-2 text-center">Android & IOS</div>
              <ul className="flex flex-wrap justify-center gap-2 text-base">
                <Tag icon={<FontAwesomeIcon icon={faFeather} />}>Flutter</Tag>
                <Tag icon={<FontAwesomeIcon icon={faTag} />}>GetX</Tag>
                <Tag icon={<FontAwesomeIcon icon={faTag} />}>Dio</Tag>
                <Tag icon={<FontAwesomeIcon icon={faEllipsis} />}>More</Tag>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      {/* Remote work */}
      <section>
        <div>
          <h2 className="mb-2 text-center text-4xl font-bold leading-[48px]">
            <HeroTitle>Looking for Remote work</HeroTitle>
          </h2>
          <ul className="flex flex-wrap justify-center gap-2 font-bold">
            <Tag icon={<FontAwesomeIcon icon={faLaptop} />}>Web</Tag>
            <Tag icon={<FontAwesomeIcon icon={faTable} />}>Backend</Tag>
            <Tag icon={<FontAwesomeIcon icon={faMobile} />}>App</Tag>
            <Tag icon={<FontAwesomeIcon icon={faMobile} />}>Mini program</Tag>
            <Tag icon={<FontAwesomeIcon icon={faEarthAmerica} />}>ToB & ToC</Tag>
            <Tag icon={<FontAwesomeIcon icon={faEllipsis} />}>More</Tag>
          </ul>
        </div>
      </section>
      {/* Product */}
      <section>
        <div>
          <h2 className="mb-2 text-center text-4xl font-bold leading-[48px]">
            <HeroTitle>Product</HeroTitle>
          </h2>
          <ul className="flex flex-col gap-4 text-2xl font-bold">
            <li className="rounded-lg p-4 shadow">
              <div>Record X</div>
              <ul className="flex flex-wrap gap-2 text-base">
                <li>
                  <Link className="flex items-center gap-2 underline" href="https://www.recordx.app" target="_blank">
                    <span>Website</span>
                    <FontAwesomeIcon icon={faLaptop} />
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center gap-2 underline" href="https://apps.apple.com/us/app/record-x/id6473734498" target="_blank">
                    <span>AppStore</span>
                    <FontAwesomeIcon icon={faApple} />
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div>
          <h2 className="mb-2 text-center text-4xl font-bold leading-[48px]">
            <HeroTitle>Hobby</HeroTitle>
          </h2>
          <ul className="flex flex-wrap justify-center gap-4 text-2xl font-bold">
            <div className="flex items-center gap-2">
              <span>Moto</span>
              <FontAwesomeIcon icon={faMotorcycle} />
            </div>
            <div className="flex items-center gap-2">
              <span>Bike</span>
              <FontAwesomeIcon icon={faPersonBiking} />
            </div>
          </ul>
        </div>
      </section>
      {/* Contact */}
      <section>
        <div>
          <h2 className="mb-2 text-center text-4xl font-bold leading-[48px]">
            <HeroTitle>Contact</HeroTitle>
          </h2>
          <ul className="flex flex-wrap justify-center gap-4 text-2xl font-bold">
            <li className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <div>Location</div>
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div className="text-base text-slate-400">China, HangZhou</div>

            </li>
            <li className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <div>Email</div>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <Link className="text-base text-slate-400 underline" href="mailto:weipengzou19867636668@gmail.com">weipengzou19867636668@gmail.com</Link>
            </li>
            <li className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <div>Wechat</div>
                <FontAwesomeIcon icon={faWeixin} />
              </div>
              <div className="text-base text-slate-400">zwp19867636668</div>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div>
          <h2 className="mb-2 text-center text-4xl font-bold leading-[48px]">
            <HeroTitle>More</HeroTitle>
          </h2>
          <ul className="flex flex-wrap justify-center gap-4 text-2xl font-bold">
            <Link className="flex items-center gap-2 underline" target="_blank" href="https://juejin.cn/user/281929041853422/posts">
              <span>Juejin</span>
              <FontAwesomeIcon icon={faBlog} />
            </Link>
            <Link className="flex items-center gap-2 underline" target="_blank" href="https://github.com/weipengzou">
              <span>Github</span>
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link className="flex items-center gap-2 underline" target="_blank" href="https://www.npmjs.com/~dudadu">
              <span>NPM</span>
              <FontAwesomeIcon icon={faNpm} />
            </Link>
          </ul>
        </div>
      </section>
    </main>
  );
}
