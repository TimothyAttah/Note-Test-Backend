import React from 'react';
import { Avatar } from '@material-ui/core';
import { Delete, ThumbUp } from '@material-ui/icons';
import {
	CommentsBottom,
	CommentsTop,
	CommentsLeft,
	Comments,
} from './CommentRowStyles';
import nameToInitials, { fullName } from '../NameInitials';

const CommentRow = ({ src, name, date, comments }) => {
	return (
		<Comments>
			<CommentsLeft>
				{src ? (
					src && <Avatar src={src} />
				) : (
					<Avatar>{nameToInitials(fullName)}</Avatar>
				)}
			</CommentsLeft>
			<CommentsTop>
				<CommentsTop primary>
					<div>
						<h4>{name}</h4>
						<p>{comments}</p>
					</div>
					<div className='delete-icon'>
						<Delete color='secondary' titleAccess='Delete' />
					</div>
				</CommentsTop>
				<CommentsBottom>
					<CommentsBottom primary>
						<h5>like .</h5>
						<h5>Reply .</h5>
						<small>{date}</small>
					</CommentsBottom>
					<CommentsBottom secondary>
						<ThumbUp color='primary' />
						<small>
							<span>12</span> Likes
						</small>
					</CommentsBottom>
				</CommentsBottom>
			</CommentsTop>
		</Comments>
	);
};

export default CommentRow;
