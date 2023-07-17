export function extractSlugFromUrl(url: string): string | null {
  try {
    const parsedUrl = new URL(url);
    const path = parsedUrl.pathname; // Obtém o caminho da URL
    const parts = path.split('/'); // Divide o caminho em partes

    // Filtra as partes não vazias e retorna a última parte como o slug
    const slug = parts
      .filter(part => part !== '')
      .pop()
      ?.trim();

    return slug || null;
  } catch (error) {
    console.error('Erro ao extrair o slug da URL:', error);
    return null;
  }
}
