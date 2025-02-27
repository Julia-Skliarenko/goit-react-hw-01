import css from "./Profile.module.css"

export default function Profile({ name, tag, location, image, stats }) {
    return (
<div className={css.card}>
  <div className={css.cardItem}>
    <img className={css.cardImg}
      src={image}
      alt={name}
    />
    <p className={css.cardTitleName}>{name}</p>
    <p className={css.cardCaption}>{tag}</p>
    <p className={css.cardCaption}>{location}</p>
  </div>

  <ul className={css.cardList}>
    <li className={css.cardListItem}>
      <span>Followers</span>
      <span className={css.cardListNumber}>{stats.followers}</span>
    </li>
    <li className={css.cardListItem}>
      <span>Views</span>
      <span className={css.cardListNumber}>{stats.views}</span>
    </li>
    <li className={css.cardListItem}>
      <span>Likes</span>
      <span className={css.cardListNumber}>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}