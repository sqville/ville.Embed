/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentPageBottomRight",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
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

   var pathdregular = "M12.93 10.56a.5.5 0 1 0-1-.15l-.08.59h-1.24l.07-.44a.5.5 0 1 0-1-.15L9.6 11H9a.5.5 0 0 0 0 1h.46l-.22 1.5H8.5a.5.5 0 0 0 0 1h.59l-.14.93a.5.5 0 0 0 1 .14l.15-1.07h1.24l-.14.93a.5.5 0 0 0 1 .14l.15-1.07H13a.5.5 0 0 0 0-1h-.5l.22-1.5h.78a.5.5 0 0 0 0-1h-.64l.07-.44Zm-2.68 2.94.22-1.5h1.24l-.22 1.5h-1.24ZM14 18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8Zm0-1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1Z";
   var pathdfilled = "m11.25 14.5.22-1.5h1.24l-.22 1.5h-1.24ZM14.5 18c.83 0 1.5-.67 1.5-1.5v-13c0-.83-.67-1.5-1.5-1.5h-9C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h9Zm-.57-6.44-.07.44h.64a.5.5 0 1 1 0 1h-.78l-.22 1.5h.5a.5.5 0 1 1 0 1h-.65l-.16 1.07a.5.5 0 0 1-.99-.14l.14-.93H11.1l-.16 1.07a.5.5 0 0 1-.99-.14l.14-.93H9.5a.5.5 0 0 1 0-1h.74l.22-1.5H10a.5.5 0 0 1 0-1h.6l.09-.59a.5.5 0 1 1 .99.15l-.07.44h1.24l.09-.59a.5.5 0 1 1 .99.15Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});