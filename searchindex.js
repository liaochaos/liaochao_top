// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("Home.html", "Liaochao", " ", "");
   this[database_length++] = new SearchPage("About.html", "Liaochao", " ", "");
   this[database_length++] = new SearchPage("Contracts.html", "Liaochao", " ", "");
   this[database_length++] = new SearchPage("Blog.html", "Liaochao", " ", "");
   return this;
}
