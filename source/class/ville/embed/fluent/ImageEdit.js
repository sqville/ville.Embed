/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ImageEdit",
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

   var pathdregular = "M14 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3c-.34.02-.68.1-1 .23V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8c0 .37.1.72.28 1.02l4.67-4.59a1.5 1.5 0 0 1 2.1 0l1.75 1.72-.71.7-1.74-1.7a.5.5 0 0 0-.7 0l-4.66 4.57c.3.18.64.28 1.01.28h3.47l-.04.15-.21.85H6a3 3 0 0 1-3-3V6Zm7.98 9.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.08l.37-1.5c.1-.38.3-.73.58-1.01Z";
   var pathdfilled = "M12.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3c-.7.03-1.37.31-1.9.84l-2.3 2.3-1.75-1.7a1.5 1.5 0 0 0-2.1 0l-5.4 5.3C3.22 15.24 3 14.64 3 14V6Zm9.5 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-2.23 5.67 1.82-1.81-1.74-1.71a.5.5 0 0 0-.7 0l-5.38 5.3c.48.34 1.08.55 1.73.55h3.22l.21-.85a3.2 3.2 0 0 1 .84-1.48Zm.7.7 4.84-4.82a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.08l.37-1.5c.1-.38.3-.73.58-1.01Z";
   
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