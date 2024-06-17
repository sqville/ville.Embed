/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BowTie",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M11 10H9v5.5c0 .83-.67 1.5-1.5 1.5H5.89a1.5 1.5 0 0 1-1.43-1.97l1.24-3.7-.74.4A2 2 0 0 1 2 9.97V5.03a2 2 0 0 1 2.96-1.76l2.5 1.36a2 2 0 0 1 .7.63C8.38 5.1 8.68 5 9 5h2c.31 0 .6.1.85.26a2 2 0 0 1 .7-.63l2.5-1.36A2 2 0 0 1 18 5.03v4.94a2 2 0 0 1-2.96 1.76l-.74-.4 1.24 3.7A1.5 1.5 0 0 1 14.1 17H12.5a1.5 1.5 0 0 1-1.5-1.5V10Zm6-4.97a1 1 0 0 0-1.48-.88l-2.5 1.36a1 1 0 0 0-.52.88V7h2a.5.5 0 0 1 0 1h-2v.61c0 .37.2.7.52.88l2.5 1.36A1 1 0 0 0 17 9.97V5.03Zm-5 4.9v5.57c0 .28.22.5.5.5h1.61a.5.5 0 0 0 .48-.66l-1.56-4.68-.01-.04-.48-.25a2 2 0 0 1-.54-.44Zm-5.03.73-1.56 4.68a.5.5 0 0 0 .48.66H7.5a.5.5 0 0 0 .5-.5V9.93a2 2 0 0 1-.54.44l-.48.25a.5.5 0 0 1 0 .04ZM11.5 6.5A.5.5 0 0 0 11 6H9a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5h2a.5.5 0 0 0 .5-.5v-2ZM7.5 8h-2a.5.5 0 0 1 0-1h2v-.61a1 1 0 0 0-.52-.88l-2.5-1.36A1 1 0 0 0 3 5.03v4.94a1 1 0 0 0 1.48.88l2.5-1.36a1 1 0 0 0 .52-.88V8Z",
    FILLED : "M7.46 4.63a2 2 0 0 1 .7.63C8.38 5.1 8.68 5 9 5h2c.31 0 .6.1.85.26a2 2 0 0 1 .7-.63l2.5-1.36A2 2 0 0 1 18 5.03v4.94a2 2 0 0 1-2.96 1.76l-2.5-1.36a2 2 0 0 1-.7-.63A1.5 1.5 0 0 1 11 10H9c-.31 0-.6-.1-.85-.26a2 2 0 0 1-.7.63l-2.5 1.36A2 2 0 0 1 2 9.97V5.03a2 2 0 0 1 2.96-1.76l2.5 1.36ZM5.5 7.5c0 .28.22.5.5.5h2V7H6a.5.5 0 0 0-.5.5ZM14 7h-2v1h2a.5.5 0 0 0 0-1Zm-5.7 4.05-.36.2-2.4 1.3-.96 2.4A1.5 1.5 0 0 0 5.98 17H7.5c.83 0 1.5-.67 1.5-1.5V11h-.6l-.1.05ZM11 15.5V11h.6l.18.1.28.14 2.4 1.3.96 2.4a1.5 1.5 0 0 1-1.4 2.06H12.5a1.5 1.5 0 0 1-1.5-1.5Z"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});