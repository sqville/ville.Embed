/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FilterSync",
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

   var pathdregular = "M10 5.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 1 0-1h.47a1.98 1.98 0 0 0-1.72-.1 2 2 0 0 0-.66.44.5.5 0 1 1-.71-.71A3 3 0 0 1 16 3.15V3c0-.28.22-.5.5-.5Zm-.88 5.53A3 3 0 0 1 13 7.85V8a.5.5 0 0 1-1 0V6.5c0-.28.22-.5.5-.5H14a.5.5 0 0 1 0 1h-.47a1.98 1.98 0 0 0 1.72.1 2 2 0 0 0 .66-.44.5.5 0 1 1 .71.71 3 3 0 0 1-1 .66ZM2.5 7h6.7c.1.35.24.68.4 1H2.5a.5.5 0 0 1-.09-1h.09Zm9 8a.5.5 0 0 1 .09 1H6.5a.5.5 0 0 1-.09-1h5.09Zm-7-4h9a.5.5 0 0 1 .09 1H4.5a.5.5 0 0 1-.09-1h.09Z";
   var pathdfilled = "M10 5.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 1 0-1h.47a1.98 1.98 0 0 0-1.72-.1 2 2 0 0 0-.66.44.5.5 0 1 1-.71-.71A3 3 0 0 1 16 3.15V3c0-.28.22-.5.5-.5Zm-.88 5.53A3 3 0 0 1 13 7.85V8a.5.5 0 0 1-1 0V6.5c0-.28.22-.5.5-.5H14a.5.5 0 0 1 0 1h-.47a1.98 1.98 0 0 0 1.72.1 2 2 0 0 0 .66-.44.5.5 0 1 1 .71.71 3 3 0 0 1-1 .66ZM14 10.98a5.46 5.46 0 0 1-2.27-.73H4.75a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 .75-.77ZM9.37 7.5c-.18-.47-.3-.98-.35-1.5H2.75a.75.75 0 0 0 0 1.5h6.62Zm1.88 7a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5h4.5Z";
   
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