/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SelectObjectSkewEdit",
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

   var pathdregular = "M16.49 6h.01a1.5 1.5 0 1 0-1.41-2l-.01.02a1.5 1.5 0 0 0 .47 1.64c.26.21.58.34.94.34ZM2 15.5a1.5 1.5 0 1 0 2.92-.48V15a1.5 1.5 0 0 0-1.4-1H3.5c-.83 0-1.5.67-1.5 1.5ZM7.49 6h.01c.65 0 1.2-.42 1.41-1l.01-.02a1.5 1.5 0 1 0-2.37.68c.26.21.58.34.94.34Zm-1.3.63-2.32 6.4c.34.05.66.17.94.34l2.32-6.4a2.48 2.48 0 0 1-.94-.34ZM14.05 5h-4.1a2.51 2.51 0 0 0 0-1h4.1a2.51 2.51 0 0 0 0 1Zm-.64 6.53 1.67-1.67 1.05-2.89a2.48 2.48 0 0 1-.94-.34l-1.78 4.9ZM5.95 16h3.52c.11-.36.29-.7.52-1H5.95a2.51 2.51 0 0 1 0 1Zm5.03-.62 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z";
   var pathdfilled = "M15 4.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm-13 11a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm4-11a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm3.89.75h4.22a2.5 2.5 0 0 1 0-1.5H9.9a2.5 2.5 0 0 1 0 1.5ZM3.6 13 5.98 6.5c.4.3.88.48 1.41.5l-2.37 6.52c-.4-.3-.88-.48-1.41-.5Zm2.28 3.25H9.4l.02-.1c.12-.46.34-.9.65-1.26 0-.05.02-.1.03-.14H5.9a2.5 2.5 0 0 1 0 1.5ZM16.39 7l-.92 2.53-.37.31-2.1 2.1 1.98-5.45c.4.3.88.48 1.41.5Zm-5.41 8.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z";
   
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