import { IBook } from '../interfaces';

export const displayBook = (book: IBook) => {
	return `
	<div class="book">
		<img src="https://edwardtanguay.netlify.app/share/images/techBooks/${book.idCode}.jpg"/>
		<div class="info">
			<div class="title">${book.title}</div>
			<div class="description">${book.description}</div>
		</div>
	</div>	
	`;
}