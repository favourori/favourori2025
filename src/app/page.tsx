import { Image } from "@/components";

export default function Home() {
  return (
    <div id="banner" className="container-fluid py-5 h-100">
      <div className="container px-1 px-lg-0 h-100">
        <div className="row align-items-center align-items-center h-100">
          <div className="col-lg-9">
            <div className="d-flex flex-column gap-5 mb-4">
              <div className="flex-shrink-0">
                <h1 className="display-1 regular mb-0">
                  Security Engineer building <br className="d-none d-lg-block" />
                  resilient systems at scale, turning complexity into clarity through
                  automation that's intelligent, purposeful, and effective.
                </h1>
              </div>
              <div className="flex-shrink-0 mb-5">
                <div className="d-flex flex-row align-items-center gap-3 text-muted mb-5">
                  <small className="d-flex align-items-center">
                    Working out of
                    <span className="d-flex align-items-center fw-medium text-dark ms-1">
                      <Image src="/assets/icons/map.svg" alt="map" width={14} height={14} className="me-1" />
                      Remote
                    </span>
                  </small>
                  <small className="d-flex align-items-center">
                    Local Time
                    <span className="d-flex align-items-center fw-medium text-dark ms-1">
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
  );
}
