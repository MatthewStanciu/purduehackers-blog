import parseMarkdownLink from 'lib/parse-markdown-link'

const Author = ({ authorString }: { authorString: string }) => {
  const { author, avatarUrl } = parseMarkdownLink(authorString)
  console.log(author, avatarUrl)
  return (
    <span className="flex flex-row gap-x-2 items-center">
      <img src={avatarUrl} className="w-[30px] rounded-full" />
      <p>{author}</p>
    </span>
  )
}

export default Author
