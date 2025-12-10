import { Breadcrumb, FeaturedWorkTwo, Works } from "@/components";
import { featuredWorks, works } from "@/configs";

export default function Projects() {
  return (
    <>
      <Breadcrumb page="Work" caption="Featured" />
      <div className="container-fluid">
        <div className="container container-lg px-1 px-lg-0">
          <div className="row g-5">
            {featuredWorks.map((f, i) => (
              <div key={i} className="col-12">
                <FeaturedWorkTwo {...f} />
              </div>
            ))}
            <div className="col-12 py-lg-3"></div>
            <div className="col-auto ms-auto">
              <h1 className="display-3 regular">Some of my work has <br className="d-none d-lg-block" /> been recognized</h1>
            </div>
            <div className="col-12">
              {works.map((w, i) => (
                <Works key={i} {...w} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
