

export class GoogleBook {
    public Id: number;
    public Title: string;
    public Slug: string;
    public Author: string;
    public Publisher: string;
    public PublishedDate: string;
    public Description: string;
    public Isbn10: string;
    public Isbn13: string;
    public PageCount: string;
    public Thumbnail: string;
    public InfoLink: string;

    constructor(id: number, title: string, slug: string = '', author: string = '', publisher: string = '',
                publishedDate: string = '', description: string = '', isbn13: string = '', isbn10: string = '',
                pageCount: string = '', thumbNail: string = '', infoLink: string = '')
    {
        this.Id = id;
        this.Title = title;
        this.Slug = slug;
        this.Author = author;
        this.Publisher = publisher;
        this.PublishedDate = publishedDate;
        this.Description = description;
        this.Isbn10 = isbn10;
        this.Isbn13 = isbn13;
        this.PageCount = pageCount;
        this.Thumbnail = thumbNail;
        this.InfoLink = infoLink;
    }

    public static Create() {
        return new GoogleBook(0, '', '', '', '','','','','','','','');
    }


}