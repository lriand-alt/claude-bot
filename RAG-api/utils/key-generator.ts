export async function generateApiKey(): Promise<string> {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    // yyyy-MM-dd
    const todayString = formatDate(today);
    const yesterdayString = formatDate(yesterday);
    
    // SHA-256 hash
    const todayHash = await digestMessage(todayString);
    const yesterdayHash = await digestMessage(yesterdayString);
    
    // XOR of the two hashes
    const resultHash = new Uint8Array(todayHash.length);
    for (let i = 0; i < todayHash.length; i++) {
      resultHash[i] = todayHash[i] ^ yesterdayHash[i];
    }
    
    // Convert to hex string and return first 16 characters
    return arrayBufferToHexString(resultHash).substring(0, 64);
  }
  
  function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }
  
  async function digestMessage(message: string): Promise<Uint8Array> {

    const msgUint8 = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
    
    return new Uint8Array(hashBuffer);
  }
  
  function arrayBufferToHexString(buffer: Uint8Array): string {
    return Array.from(buffer)
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  }