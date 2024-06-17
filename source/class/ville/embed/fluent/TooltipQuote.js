/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TooltipQuote",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .8.4c-.2.67-.5 1.1-.65 1.25a.5.5 0 1 0 .7.7A4.97 4.97 0 0 0 7 5.5a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .8.4c-.2.67-.5 1.1-.65 1.25a.5.5 0 1 0 .7.7A4.97 4.97 0 0 0 10 5.5a.5.5 0 0 0-.5-.5h-1ZM2 4c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9.42l-1.48 2.74a.5.5 0 0 1-.88 0L5.56 12H4a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1.86c.18 0 .35.1.44.26l1.2 2.2 1.18-2.2a.5.5 0 0 1 .44-.26H11a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4ZM2.5 14h3.02l.54 1H2.5a.5.5 0 0 1 0-1Zm15 1H8.93l.55-1h8.02a.5.5 0 0 1 0 1Zm-15 2a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1h-10Z",
    FILLED : "M2 4c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9.42l-1.48 2.74a.5.5 0 0 1-.88 0L5.56 12H4a2 2 0 0 1-2-2V4Zm3.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .8.4c-.2.67-.5 1.1-.65 1.25a.5.5 0 1 0 .7.7A4.97 4.97 0 0 0 7 5.5a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .8.4c-.2.67-.5 1.1-.65 1.25a.5.5 0 1 0 .7.7A4.97 4.97 0 0 0 10 5.5a.5.5 0 0 0-.5-.5h-1Zm-2.98 9H2.5a.5.5 0 0 0 0 1h3.56l-.54-1Zm3.41 1h8.57a.5.5 0 0 0 0-1H9.48l-.55 1ZM2 17.5c0-.28.22-.5.5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5Z"
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