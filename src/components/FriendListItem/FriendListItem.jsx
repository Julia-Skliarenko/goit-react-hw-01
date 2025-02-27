import css from "../FriendList/FriendList";
import clsx from "clsx";

export default function FriendListItem({ name, avatar, isOnline }) {
    const statusClsx = clsx(isOnline ? css.online : css.offline);
    return (
        <div className={css.friendCard}>
  <img className={css.friendImg} src={avatar} alt={name} width="48" />
  <p className={css.friendName}>{name}</p>
  <p className={statusClsx}>{isOnline ? "online" : "offline"}</p>
</div>
    )
}


