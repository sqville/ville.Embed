/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CommentEdit",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17 8.13V5.57C17 4.7 16.3 4 15.4 4H4.6C3.7 4 3 4.71 3 5.57v6.7c0 .86.7 1.57 1.6 1.57h1.6V17l2.17-1.6-.31 1.25-.05.26-1.21.9a1 1 0 0 1-1.4-.2.98.98 0 0 1-.2-.6v-2.17h-.6A2.58 2.58 0 0 1 2 12.28V5.57A2.58 2.58 0 0 1 4.6 3h10.8C16.84 3 18 4.15 18 5.57v3.12c-.3-.26-.64-.44-1-.56Zm-2.2 1.42-4.82 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.07 1.07l1.5-.37c.39-.1.74-.3 1.02-.58l4.83-4.83a1.87 1.87 0 1 0-2.64-2.64Z",
    FILLED : "M5.4 17.6a1 1 0 0 0 1.4.2L8 16.9l.05-.25.37-1.5a3.2 3.2 0 0 1 .84-1.48l4.83-4.83A2.87 2.87 0 0 1 18 8.7V5.57A2.58 2.58 0 0 0 15.4 3H4.6A2.58 2.58 0 0 0 2 5.57v6.7a2.58 2.58 0 0 0 2.6 2.57h.6v2.17c0 .22.07.42.2.6Zm9.4-8.05-4.82 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.07 1.07l1.5-.37c.39-.1.74-.3 1.02-.58l4.83-4.83a1.87 1.87 0 1 0-2.64-2.64Z"
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