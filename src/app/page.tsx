import { FeaturedWork, Image, SectionTitle } from "@/components";
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
                  <h1 className="display-1 regular mb-0">
                    Security Engineer building <br className="d-none d-lg-block" />
                    resilient systems at scale, turning complexity into clarity through
                    automation that's intelligent, <br className="d-none d-lg-block" /> purposeful, and effective.
                  </h1>
                </div>
                <div className="flex-shrink-0">
                  <div className="d-flex flex-row align-items-center gap-3 text-muted">
                    <small className="d-flex align-items-center">
                      <span className="opacity-50">Working out of</span>
                      <span className="d-flex align-items-center fw-medium text-dark ms-2">
                        <Image src="/assets/icons/map.svg" alt="map" width={14} height={14} className="me-1" />
                        Remote
                      </span>
                    </small>
                    <small className="d-flex align-items-center">
                      <span className="opacity-50">Local Time</span>
                      <span className="d-flex align-items-center fw-medium text-dark ms-2">
                        <Image src="/assets/icons/clock.svg" alt="clock" width={14} height={14} className="me-1" />
                        4:07 PM
                      </span>
                    </small>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle title="Featured Work" />

      <div className="container-fluid pb-5">
        <div className="container px-1 px-lg-0">
          <div className="row justify-content-center gy-5">
            <div className="col-lg-10">
              <div className="list-group list-group-flush">
                {featuredWorks.map((f, i) => (
                  <div key={i} className="list-group-item bg-transparent p-0">
                    <FeaturedWork {...f} />
                  </div>
                ))}
                <div className="list-group-item bg-transparent p-0 py-5">
                  <button type="button" className="btn btn-outline-secondary w-100 lh-lg py-3 fs-18 fw-medium">View My Projects</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
