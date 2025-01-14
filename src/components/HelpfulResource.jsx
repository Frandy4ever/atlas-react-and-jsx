import OpenLink from "./OpenLink";
import CopyLink from "./CopyLink";

export default function HelpfulResource({ link, label }) {
  return (
    <div className="helpful-resource">
      <span>{label}</span>
      <OpenLink link={link} />
      <CopyLink link={link} />
    </div>
  );
}
