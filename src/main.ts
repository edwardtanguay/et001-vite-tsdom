import './style.scss';
import axios from 'axios';

const rawBooksUrl = 'https://edwardtanguay.netlify.app/share/techBooks.json';

interface IBook {
	title: string,
	description: string,
	language: string
}

(async () => {
	const rawBooks: any[] = (await axios.get(rawBooksUrl)).data;
	const books: IBook[] = [];
	rawBooks.forEach(rawBook => {
		const book: IBook = {
			title: rawBook.title,
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
			return `
	<div class="book">
			<div class="title">${book.title}</div>
	</div>	
			`;
	}).join('')}
	</div>
	</div>
`;
})();

