/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.AnimalRabbit",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10.51 15.01h2.12c.91 0 1.68-.57 1.99-1.37.88.07 1.79-.23 2.46-.9a3.15 3.15 0 0 0 0-4.45l-4.22-4.22c-.59-.59-1.55-.59-2.14 0-.6.6-.6 1.56 0 2.15l1.34 1.33c-.12.16-.22.33-.3.5a3.55 3.55 0 0 0-.54-.05H7.54c-.33 0-.65.05-.95.13A2.5 2.5 0 1 0 4 11.95v.93c0 1.18.95 2.13 2.12 2.13h4.39Zm1.64-10.23L16.38 9a2.15 2.15 0 0 1-2 3.6l-.56-.13-.06.56c-.07.56-.54.99-1.12.99h-1.62v-.1C11 12.78 9.99 12 8.89 12H7.5a.5.5 0 0 0 0 1h1.39c.69 0 1.12.46 1.12.91v.1H6.12c-.62 0-1.12-.5-1.12-1.13v-1.33A2.55 2.55 0 0 1 7.54 9h3.68c.23 0 .46.03.68.1l.42.11.18-.4c.1-.26.26-.57.47-.79l.5-.48-2.04-2.02a.52.52 0 0 1 0-.74c.2-.2.52-.2.72 0Zm-6.5 3.77a3.55 3.55 0 0 0-1.6 2.38 1.5 1.5 0 1 1 1.6-2.38Z",
    FILLED : "m12.68 4.38 4.23 4.23a2.78 2.78 0 0 1-2.6 4.67v.16c0 .86-.7 1.56-1.57 1.56H11v-1.25c0-.54-.28-.98-.67-1.28-.38-.3-.9-.47-1.43-.47H7.5a.5.5 0 1 0 0 1h1.4c.33 0 .62.1.82.26.2.15.28.33.28.49V15H5.56C4.7 15 4 14.3 4 13.44v-2.21A2.12 2.12 0 1 1 6.05 8.3C6.5 8.11 7 8 7.52 8h3.28c.47 0 .92.1 1.33.26l.08-.13c.11-.19.23-.4.38-.55l-1.55-1.56a1.16 1.16 0 1 1 1.64-1.64Z"
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