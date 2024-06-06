/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BoardGames",
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

   var pathdregular = "M13.5 3a2 2 0 0 0-1.96 2.4.5.5 0 0 1-.54.6 2 2 0 0 0-.92.22 4 4 0 0 0-.55-.83c.3-.17.62-.29.97-.35V5a3 3 0 1 1 6 0v.04a3 3 0 1 1-1.14 5.9l.22.9a1.75 1.75 0 0 1-1.7 2.16h-.76a1.75 1.75 0 0 1-1.7-2.16l.45-1.86a.5.5 0 1 1 .97.24l-.45 1.85c-.12.47.24.93.73.93h.76c.49 0 .84-.45.73-.93l-.45-1.85a.5.5 0 0 1 .76-.54A2 2 0 1 0 15.96 6a.5.5 0 0 1-.5-.6A2 2 0 0 0 13.5 3Zm-9 5a2 2 0 1 1 3.6 1.2.5.5 0 0 0 .4.8H9a.5.5 0 0 1 0 1H7.9a.5.5 0 0 0-.5.56 6.86 6.86 0 0 0 2.34 4.5c.17.15.26.33.26.49 0 .25-.2.45-.45.45h-6.1a.45.45 0 0 1-.45-.45c0-.16.09-.34.26-.49a6.86 6.86 0 0 0 2.34-4.5.5.5 0 0 0-.5-.56H4a.5.5 0 0 1 0-1h.5a.5.5 0 0 0 .4-.8c-.25-.33-.4-.75-.4-1.2Zm2-3a3 3 0 0 0-2.82 4.03A1.5 1.5 0 0 0 4 12h.52a5.76 5.76 0 0 1-1.9 3.3c-.35.28-.62.73-.62 1.25 0 .8.65 1.45 1.45 1.45h6.1c.8 0 1.45-.65 1.45-1.45 0-.52-.27-.97-.62-1.26A5.76 5.76 0 0 1 8.48 12H9a1.5 1.5 0 0 0 .32-2.97A3 3 0 0 0 6.5 5Z";
   var pathdfilled = "M15.95 5.5a2.6 2.6 0 0 1 .98.18 2.5 2.5 0 1 1-2.29 4.42l.45 1.86c.2.78-.4 1.54-1.21 1.54h-.76c-.81 0-1.41-.76-1.22-1.55l.45-1.85a2.48 2.48 0 0 1-1.41.4 2 2 0 0 0-.7-1.07 3.99 3.99 0 0 0-.4-3.64 2.5 2.5 0 0 1 1.2-.29 2.5 2.5 0 0 1 2.46-3 2.5 2.5 0 0 1 2.45 3ZM6.5 5a3 3 0 0 0-2.24 5H4a1 1 0 1 0 0 2h.52a5.76 5.76 0 0 1-1.9 3.3c-.35.28-.62.73-.62 1.25 0 .8.65 1.45 1.45 1.45h6.1c.8 0 1.45-.65 1.45-1.45 0-.52-.27-.97-.62-1.26A5.76 5.76 0 0 1 8.48 12H9a1 1 0 1 0 0-2h-.26A3 3 0 0 0 6.5 5Z";
   
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