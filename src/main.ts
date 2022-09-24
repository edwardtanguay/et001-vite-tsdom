import './style.scss';
import axios from 'axios';
import { IBook } from './interfaces';
import { displayBook } from './modules/displayBook';

const rawBooksUrl = 'https://edwardtanguay.netlify.app/share/techBooks.json';

(async () => {
	const rawBooks: any[] = (await axios.get(rawBooksUrl)).data;
	const books: IBook[] = [];
	rawBooks.forEach(rawBook => {
		const book: IBook = {
			title: rawBook.title,
			idCode: rawBook.idCode,
			description: rawBook.description,
			language: rawBook.language === '' ? 'english' : rawBook.language
		}
		books.push(book);
	});
	document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
	<div>
	<h1>Book Site</h1>
	<p>There are ${books.length} books.</p>

	<div class="books">
		${books.map(book => {
			return displayBook(book);
	}).join('')}
	</div>
	</div>
`;
})();

