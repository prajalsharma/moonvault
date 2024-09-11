import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function getJobs() {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;
    if (!databaseId) {
      throw new Error('NOTION_DATABASE_ID is not defined');
    }

    const response = await notion.databases.query({
      database_id: databaseId,
    });
  
    return response.results.map((page: any) => ({
      id: page.id,
      role: page.properties['Role'].title[0]?.text.content || '',
      type: page.properties['Job Type'].rich_text[0]?.text.content || 'N/A',
      location: page.properties['Location'].rich_text[0]?.text.content || 'N/A',
      hybrid: page.properties['Hybrid'].rich_text[0]?.text.content || 'N/A',
      jobFunction: page.properties['Job Function'].rich_text[0]?.text.content || 'N/A',
      jobDescription: page.properties['Job Description']?.rich_text?.map((richText: any) => {
        if (richText.type === 'text') {
          const { content, link } = richText.text;
          return link ? link.url : content;
        }
        return ''; 
      }).join('') || 'N/A',
      company: page.properties['Project'].rich_text[0]?.text.content || 'N/A',
      category: page.properties['Category'].rich_text[0]?.text.content || 'N/A',
      logo: page.properties['Image']?.rich_text?.map((richText: any) => {
        if (richText.type === 'text') {
          const { content, link } = richText.text;
          return link ? link.url : content;
        }
        return ''; 
      }).join(''),
      // logo: page.properties['Image'].files?.file?.url || page.properties['Image'].files?.external?.url,
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
}