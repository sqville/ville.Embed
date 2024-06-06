/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BookQuestionMarkRtl",
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

   var pathdregular = "M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm10-1a1 1 0 0 1 1 1v11H5V4a1 1 0 0 1 1-1h8Zm-2.76 3.4c.2.22.26.47.26.6a.5.5 0 0 0 1 0c0-.37-.14-.87-.54-1.28C11.55 5.29 10.91 5 10 5c-.91 0-1.55.29-1.96.72-.4.41-.54.91-.54 1.28 0 1.05.73 1.55 1.28 1.82l.39.18h.01a5.75 5.75 0 0 1 .32.15V10a.5.5 0 0 0 1 0V9a.73.73 0 0 0-.24-.53c-.11-.1-.24-.18-.35-.23l-.32-.15-.02-.01-.35-.16C8.77 7.7 8.5 7.45 8.5 7a.9.9 0 0 1 .26-.6c.19-.19.55-.4 1.24-.4s1.05.21 1.24.4ZM10 13a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z";
   var pathdfilled = "M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6Zm5.24 4.4c-.19-.19-.55-.4-1.24-.4s-1.05.21-1.24.4a.9.9 0 0 0-.26.6c0 .45.27.7.72.92l.35.16.02.01.32.15c.1.05.24.12.35.23.11.1.24.28.24.53v1a.5.5 0 1 1-1 0v-.85l-.04-.02A5.75 5.75 0 0 0 9.18 9h-.01a7.97 7.97 0 0 1-.4-.18C8.24 8.55 7.5 8.05 7.5 7c0-.37.14-.87.54-1.28C8.45 5.29 9.09 5 10 5c.91 0 1.55.29 1.96.72.4.41.54.91.54 1.28a.5.5 0 0 1-1 0 .9.9 0 0 0-.26-.6ZM10 13a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z";
   
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