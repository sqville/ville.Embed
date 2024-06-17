/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentSignature",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91.07.08c-.19.11-.37.25-.53.41L13.94 8H11.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.94l1-1V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4Zm7.5 3h3.3L11 3.2v3.3c0 .28.22.5.5.5Zm4.3.55-4.82 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5-.02.1H6.5a.5.5 0 0 0 0 1H11a.5.5 0 0 0 .23-.06l1.37-.34c.39-.1.74-.3 1.02-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64Z",
    FILLED : "M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-2.44l-1.67 1.67c-.4.4-.92.7-1.48.84l-1.5.37c-.9.23-1.74-.22-2.13-.94H6.5a.5.5 0 0 1 0-1H9l.06-.35.37-1.5a3.2 3.2 0 0 1 .84-1.48L13.94 8H11.5A1.5 1.5 0 0 1 10 6.5Zm5.36.11a2.9 2.9 0 0 0-.26.23l-.16.16H11.5a.5.5 0 0 1-.5-.5V2.25l4.36 4.36Zm-4.38 5.77 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z"
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