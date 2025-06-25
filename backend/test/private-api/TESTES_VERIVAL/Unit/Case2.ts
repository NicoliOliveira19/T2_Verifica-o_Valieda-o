import { renderMarkdownToHtml } from '../utils/markdown'; 

it('deve renderizar uma lista não ordenada em HTML', () => {
  const markdown = '* Item 1\n* Item 2';
  const html = renderMarkdownToHtml(markdown);
  expect(html).toContain('<ul>');
  expect(html).toContain('<li>Item 1</li>');
  expect(html).toContain('<li>Item 2</li>');
});
