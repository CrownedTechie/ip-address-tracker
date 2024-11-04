import IPCardStyles from "./IPCard.module.css";

interface IPCardProps {
  title: string;
  text: string;
};

const IPCard = ({title, text}: IPCardProps) => {
  return (
    <>
      <article className={IPCardStyles.article}>
        <h6 className={IPCardStyles.h6}>{title}</h6>
        <p className={IPCardStyles.p}>{text}</p>
      </article>
    </>
  )
}

export default IPCard;
