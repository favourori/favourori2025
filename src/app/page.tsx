import { FeaturedWork, FeaturedWorkTwo, Image, Link, SectionTitle } from "@/components";
import { featuredWorks } from "@/configs";

export default function Home() {
  return (
    <>
      <div id="banner" className="container-fluid pt-5 h-100">
        <div className="container container-lg px-1 px-lg-0 h-100">
          <div className="row align-items-center align-items-center h-100">
            <div className="col-lg-9">
              <div className="d-flex flex-column gap-5">
                <div className="flex-shrink-0">
                  <h1 className="display-2 regular mb-0">
                    I design and build secure systems at scale. My work sits at the intersection of cloud security, application security, and intelligent automation, driving resilience across complex enterprise environments.
                  </h1>
                </div>
                <div className="flex-shrink-0">
                  <div className="d-flex flex-row align-items-center gap-3 text-muted fs-18">
                    <span className="d-flex align-items-center">
                      <span>Working out of</span>
                      <span className="d-flex align-items-center fw-medium text-dark ms-2">
                        <Image src="/assets/icons/map.svg" alt="map" width={14} height={14} className="me-1" />
                        Remote
                      </span>
                    </span>
                    <span className="d-flex align-items-center">
                      <span>Local Time</span>
                      <span className="d-flex align-items-center fw-medium text-dark ms-2">
                        <Image src="/assets/icons/clock.svg" alt="clock" width={14} height={14} className="me-1" />
                        4:07 PM
                      </span>
                    </span>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <SectionTitle title="Featured Work" /> */}

      <div className="container-fluid pb-5">
        <div className="container-lg px-1 px-lg-0 py-5 my-3">
          <div className="row g-4 gy-lg-5">
            <div className="col-12 text-center mb-3">
              <h6 className="regular-italic">FEATURED</h6>
              <h1 className="regular display-1">WORK</h1>
            </div>
            {featuredWorks.map((f, i) => (
              <div key={i} className="col-12">
                <FeaturedWorkTwo {...f} />
              </div>
            ))}
            <div className="col-12">
              <Link href="/projects" className="btn btn-outline-secondary border rounded-4 w-100 lh-lg py-3 fs-18 fw-medium">View My Projects</Link>
            </div>
          </div>
        </div>
        <div className="container px-1 px-lg-0 d-none">
          <div className="row justify-content-center gy-5">
            <div className="col-lg-10">
              <div className="list-group list-group-flush">
                {featuredWorks.map((f, i) => (
                  <div key={i} className="list-group-item bg-transparent p-0">
                    <FeaturedWork {...f} />
                  </div>
                ))}
                <div className="list-group-item bg-transparent p-0 py-5">
                  <Link href="/projects" className="btn btn-outline-secondary w-100 lh-lg py-3 fs-18 fw-medium">View My Projects</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
