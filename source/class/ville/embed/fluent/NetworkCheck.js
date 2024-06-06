/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.NetworkCheck",
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

   var pathdregular = "M2.51 10.18a8 8 0 0 1 10.37-4.65l.57-.72.08-.1a9 9 0 0 0-11.95 5.1.5.5 0 1 0 .93.37Zm13.5-3.87a9.02 9.02 0 0 1 2.41 3.51.5.5 0 0 1-.93.36 8 8 0 0 0-1.87-2.88l.26-.66.14-.33ZM10 6.5c.66 0 1.3.1 1.9.28l-.67.86a5.52 5.52 0 0 0-6.56 3.98.5.5 0 1 1-.96-.24A6.5 6.5 0 0 1 10 6.5Zm5 2.35-.44 1.08c.35.51.6 1.08.77 1.7a.5.5 0 1 0 .97-.25c-.25-.95-.7-1.8-1.3-2.53ZM10 9h.16l-.83 1.08A3 3 0 0 0 7 13a.5.5 0 0 1-1 0 4 4 0 0 1 4-4Zm3.17 4.35v.02c.08.08.2.13.33.13a.5.5 0 0 0 .5-.5 4 4 0 0 0-.19-1.21l-.64 1.56Zm.22-6.85.61-.78.23-.29.04-.04a.5.5 0 0 1 .86.37l-.04.16-.14.35a1207.08 1207.08 0 0 1-2.7 6.7 77.26 77.26 0 0 1-.73 1.66 1.75 1.75 0 0 1-3.04-1.75l.38-.54.7-.92a341.32 341.32 0 0 1 3.83-4.92Zm-1.1 3.02a338.93 338.93 0 0 0-2.94 3.86.75.75 0 1 0 1.3.75l.23-.5.44-1.05a342.47 342.47 0 0 0 1.55-3.8l-.57.74Zm2.84-3.76a.5.5 0 0 1-.04.16Z";
   var pathdfilled = "M2.51 10.18a8 8 0 0 1 10.37-4.65l.57-.72.08-.1a9 9 0 0 0-11.95 5.1.5.5 0 1 0 .93.37Zm13.5-3.87a9.02 9.02 0 0 1 2.41 3.51.5.5 0 0 1-.93.36 8 8 0 0 0-1.87-2.88l.26-.66.14-.33ZM10 6.5c.66 0 1.3.1 1.9.28l-.67.86a5.52 5.52 0 0 0-6.56 3.98.5.5 0 1 1-.96-.24A6.5 6.5 0 0 1 10 6.5Zm5 2.35-.44 1.08c.35.51.6 1.08.77 1.7a.5.5 0 1 0 .97-.25c-.25-.95-.7-1.8-1.3-2.53ZM10 9h.16l-.83 1.08A3 3 0 0 0 7 13a.5.5 0 0 1-1 0 4 4 0 0 1 4-4Zm3.17 4.35v.02c.08.08.2.13.33.13a.5.5 0 0 0 .5-.5 4 4 0 0 0-.19-1.21l-.64 1.56Zm.22-6.85.61-.78.23-.29.04-.04a.5.5 0 0 1 .86.37l-.04.16-.14.35a1207.08 1207.08 0 0 1-2.7 6.7 77.26 77.26 0 0 1-.73 1.66 1.75 1.75 0 0 1-3.04-1.75l.38-.54.7-.92a341.32 341.32 0 0 1 3.83-4.92Zm1.74-.74a.5.5 0 0 1-.04.16Z";
   
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