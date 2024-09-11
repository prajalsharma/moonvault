import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function getBlogPosts() {
  const databaseId = process.env.NOTION_DATABASE_ID || '';
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  
  return response.results.map((page: any) => ({
    id: page.id,
    role: page.properties['Role'].title[0]?.text.content || '',
    location: page.properties['Location'].rich_text[0]?.text.content || 'N/A',
    jobDescription: page.properties['Job Description']?.rich_text?.map((richText: any) => {
      if (richText.type === 'text') {
        const { content, link } = richText.text;
        return link ? link.url : content;
      }
      return ''; 
    }).join('') || 'N/A',
    company: page.properties['Project'].rich_text[0]?.text.content || 'N/A',
    type: page.properties['Job Type'].rich_text[0]?.text.content || 'N/A',
    logo: page.properties['Image']?.rich_text?.map((richText: any) => {
      if (richText.type === 'text') {
        const { content, link } = richText.text;
        return link ? link.url : content;
      }
      return ''; 
    }).join(''),
    // logo: page.properties['Image'].files?.file?.url || page.properties['Image'].files?.external?.url,
  }));
}