/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowHookDownLeft",
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

   var pathdregular = "M6 4.5c0-.28.22-.5.5-.5H11c1.64 0 2.9.62 3.75 1.57C15.59 6.52 16 7.77 16 9s-.41 2.48-1.25 3.43A4.85 4.85 0 0 1 11 14H5.7l2.65 2.65a.5.5 0 0 1-.7.7l-3.5-3.5a.5.5 0 0 1 0-.7l3.5-3.5a.5.5 0 1 1 .7.7L5.71 13H11c1.36 0 2.35-.5 3-1.24.66-.74 1-1.74 1-2.76 0-1.02-.34-2.02-1-2.76A3.86 3.86 0 0 0 11 5H6.5a.5.5 0 0 1-.5-.5Z";
   var pathdfilled = "M6 4.75c0-.41.34-.75.75-.75h4.5c1.59 0 2.7.62 3.53 1.59C15.6 6.54 16 7.79 16 9c0 1.22-.3 2.46-1.12 3.41A4.62 4.62 0 0 1 11.25 14H6.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 .02-1.08l3.5-3.25a.75.75 0 0 1 1.02 1.1l-2.1 1.95h4.59c1.16 0 1.86-.44 2.4-1.07.55-.64.85-1.52.85-2.43 0-.9-.3-1.79-.85-2.43a2.92 2.92 0 0 0-2.4-1.07h-4.5A.75.75 0 0 1 6 4.75Z";
   
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