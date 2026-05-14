export class PaginationHelper {
  collection: unknown[] = [];
  itemsPerPage: number;
  public constructor(collection: unknown[], itemsPerPage: number) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  public itemCount(): number {
    // returns the number of items within the entire collection
    return this.collection.length;
  }

  public pageCount(): number {
    // returns the number of pages
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  public pageItemCount(pageIndex: number): number {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    if (pageIndex < 0 || pageIndex > this.pageCount() - 1)
      return -1;
    if (this.collection.length % this.itemsPerPage === 0)
      return this.itemsPerPage;
    if (pageIndex === this.pageCount() - 1)
      return this.collection.length % this.itemsPerPage;
    return this.itemsPerPage;
  }

  public pageIndex(itemIndex: number): number {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    if (itemIndex < 0 || itemIndex > this.collection.length - 1 || !this.collection.length)
      return -1;
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}