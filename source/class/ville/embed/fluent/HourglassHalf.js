/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HourglassHalf",
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

   var pathdregular = "M13.69 14.6c.2.44.3.92.31 1.4H6a3.41 3.41 0 0 1 1.22-2.56l1.82-1.52a2.48 2.48 0 0 0 .9-1.92h.12c.01.37.11.73.29 1.06.15.33.37.62.65.85l1.78 1.53c.39.31.7.71.91 1.16Zm-8.5 3.24c.23.1.48.16.73.16h8.16a1.93 1.93 0 0 0 1.76-1.2c.1-.22.16-.47.16-.72a5.32 5.32 0 0 0-.5-2.31 5.06 5.06 0 0 0-1.44-1.87l-1.82-1.52a.5.5 0 0 1 0-.77l1.82-1.52A5.3 5.3 0 0 0 16 3.92a1.93 1.93 0 0 0-1.2-1.76c-.22-.1-.47-.16-.72-.16H5.92a1.93 1.93 0 0 0-1.76 1.2c-.1.22-.16.47-.16.72A5.34 5.34 0 0 0 5.94 8.1l1.82 1.53c.06.04.1.1.13.17a.5.5 0 0 1-.13.6l-1.82 1.5a5.65 5.65 0 0 0-1.44 1.88 5.32 5.32 0 0 0-.5 2.3 1.93 1.93 0 0 0 1.2 1.77Zm9.22-.91a.96.96 0 0 1-.37.07H5.96c-.14 0-.26-.03-.37-.08-.11-.05-.21-.11-.3-.2a.87.87 0 0 1-.22-.3.98.98 0 0 1-.07-.38 4.45 4.45 0 0 1 1.58-3.37l1.82-1.52A1.53 1.53 0 0 0 8.94 10a1.51 1.51 0 0 0-.54-1.16L6.58 7.33A4.02 4.02 0 0 1 5.4 5.82 4.06 4.06 0 0 1 5 3.96c0-.14.03-.26.08-.37.04-.11.11-.21.2-.3.09-.1.2-.17.3-.22A.98.98 0 0 1 5.97 3h8.08c.14.01.26.04.37.08.11.04.21.1.3.2a.95.95 0 0 1 .29.68 4.43 4.43 0 0 1-1.58 3.37L11.6 8.84a1.51 1.51 0 0 0 0 2.3l1.82 1.53A4.37 4.37 0 0 1 15 16.04c-.01.14-.04.26-.08.37-.04.11-.1.21-.2.3-.1.1-.2.17-.31.22Z";
   var pathdfilled = "M9.94 10a2.48 2.48 0 0 1-.9 1.92l-1.82 1.52A3.41 3.41 0 0 0 6 16h8c0-.48-.11-.96-.31-1.4a3.37 3.37 0 0 0-.91-1.16L11 11.91c-.28-.23-.5-.52-.65-.85a2.42 2.42 0 0 1-.29-1.06h-.12Z";
   
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