{
  // Record
  /**
   * type을 묶을 수 있는 것
   * <key, value>로 사용할 수 있음
   */

  type PageInfo = {
    title: string;
  };
  type Page = 'home' | 'about' | 'contact';
  const nav: Record<Page, PageInfo> = {
    home: { title: 'Home' },
    about: { title: 'About' },
    contact: { title: 'Contact' },
  };
}
